import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import MobileNav from "components/sections/header/mobileNav/mobileNav";
import {
  TemplateWrap,
  SideNavWrap,
  MainContent,
} from "styles/appLayoutStyles";
import DesktopNav from "components/sections/header/desktopNav/desktopNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <MobileNav />
      <TemplateWrap>
        <SideNavWrap>
          <DesktopNav />
        </SideNavWrap>
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
      </TemplateWrap>
    </>
  );
}

export default MyApp;
