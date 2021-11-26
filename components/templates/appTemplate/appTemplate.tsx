import type { NextPage } from "next";
import {
  TemplateWrap,
  SideNavWrap,
  MainContent,
} from "components/templates/appTemplate/appTemplateStyles";
import DesktopNav from "components/sections/header/desktopNav/desktopNav";

const AppTemplate: NextPage = () => {
  return (
    <TemplateWrap>
      <SideNavWrap>
        <DesktopNav />
      </SideNavWrap>
      <MainContent>Content</MainContent>
    </TemplateWrap>
  );
};

export default AppTemplate;
