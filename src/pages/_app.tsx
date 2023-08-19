import type { AppProps } from "next/app";
import { DefaultTheme, StyleSheetManager, ThemeProvider } from "styled-components";
import GlobalStyle from "../components/globalStyles";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { ReactComponentElement, ReactNode, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alert, ConfigProvider, Spin } from "antd";
import rtlPlugin from "stylis-plugin-rtl";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ar from "@/messages/ar.json";
import "@/Styles/style.css";
import useUser from "@/hooks/useUser";
import "moment/locale/ar";
import "moment/locale/en-au";
import moment from "moment/moment";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SpinLight } from "@/Styles/styled.general";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    ngprogressColor: "#00D9C8",
  },
};

const TranslateDate = () => {
  const x = useLocale();
  moment.locale(x);
  return null;
};

const GetUserData = () => {
  useUser();
  return null;
};

const AUTH_PATHS = ["/login", "/register"];
const NOT_PROTECTED_PATHS = ["/", "/blog", "/help", "/contact", "/about", "/terms"];

const ProtectedRoute = ({ Component, pageProps, router }: AppProps) => {
  const { user, loading } = useUser();
  const [routeLoading, setRouteLoading] = useState(false);

  const goToLogin = useCallback(async () => {
    setRouteLoading(true);
    try {
      await router.push("/login");
    } catch (error) {}
    setRouteLoading(false);
  }, [router]);

  const goToHome = useCallback(async () => {
    setRouteLoading(true);
    try {
      await router.push("/");
    } catch (error) {}
    setRouteLoading(false);
  }, [router]);

  useEffect(() => {
    if (!NOT_PROTECTED_PATHS.includes(router.pathname)) {
      if (!user) goToLogin();
    }
    if (AUTH_PATHS.includes(router.pathname)) {
      if (user) goToHome();
    }
  }, [goToHome, goToLogin, router.pathname, user]);

  return (
    <>
      {(loading || routeLoading) && (
        <div className="fullback">
          <Spin spinning={loading} size="large" />
        </div>
      )}
      {(!loading || !routeLoading) && <Component {...pageProps} />}
    </>
  );
};

export default function App({ Component, pageProps, router }: AppProps) {
  const { locale, pathname } = useRouter();

  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00D9C8",
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NextIntlClientProvider messages={pageProps.messages || ar}>
              <StyleSheetManager stylisPlugins={dir === "rtl" ? [rtlPlugin] : []}>
                <QueryClientProvider client={queryClient}>
                  <Hydrate state={pageProps.dehydratedState}>
                    <NextNprogress height={4} color={theme.colors.ngprogressColor} />
                    <ToastContainer autoClose={3000} closeOnClick theme="light" />
                    <GetUserData />
                    <TranslateDate />
                    <ProtectedRoute Component={Component} pageProps={pageProps} router={router} />
                  </Hydrate>
                </QueryClientProvider>
              </StyleSheetManager>
            </NextIntlClientProvider>
          </ThemeProvider>
        </ConfigProvider>
      </Provider>
    </>
  );
}
