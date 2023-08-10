import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { ToastContainer, toast } from "react-toastify";

interface MyDocumentProps {
  locale: string;
}

class MyDocument extends Document<MyDocumentProps> {
  private htmlElement: HTMLElement | null = null;
  props: any;

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const cache = createCache();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <StyleProvider cache={cache}>
                <App {...props} />
              </StyleProvider>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const { locale } = ctx.query;

      return {
        ...initialProps,
        locale,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {/* This is hack, `extractStyle` does not currently support returning JSX or related data. */}
            <script
              dangerouslySetInnerHTML={{
                __html: `</script>${extractStyle(cache)}<script>`,
              }}
            />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html dir={this.props.locale === "ar" ? "rtl" : "ltr"} lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
