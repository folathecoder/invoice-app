import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <meta name="theme-color" content="#7C5DFA" />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="audiophile" key="twhandle" />
          <meta
            property="og:url"
            content="https://audiophilic.vercel.app/"
            key="ogurl"
          />
          <meta
            property="og:image"
            content="https://audiophilic.vercel.app/audiophile-og.png"
            key="ogimage"
          />
          <meta property="og:site_name" content="audiophile" key="ogsitename" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
