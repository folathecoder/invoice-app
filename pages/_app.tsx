import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import MobileNav from "components/sections/header/mobileNav/mobileNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <MobileNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
