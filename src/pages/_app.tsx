import type { AppProps } from "next/app";
import { DefaultTheme, StyleSheetManager, ThemeProvider } from "styled-components";
import GlobalStyle from "../components/globalStyles";
import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ConfigProvider } from "antd";
import rtlPlugin from "stylis-plugin-rtl";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import en from "@/messages/en.json";
import useUser from "@/hooks/useUser";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    ngprogressColor: "#00D9C8",
  },
};

const GetUserData = () => {
  useUser();
  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Provider store={store}>
        <GetUserData/>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00D9C8",
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NextIntlClientProvider messages={pageProps.messages || en}>
              <StyleSheetManager stylisPlugins={dir === "rtl" ? [rtlPlugin] : []}>
                <QueryClientProvider client={queryClient}>
                  <Hydrate state={pageProps.dehydratedState}>
                    <NextNprogress height={4} color={theme.colors.ngprogressColor} />
                    <ToastContainer autoClose={3000} closeOnClick theme="light" />
                    <Component {...pageProps} />
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
