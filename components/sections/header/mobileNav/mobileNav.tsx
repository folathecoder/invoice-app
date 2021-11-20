import type { NextPage } from "next";
import {
  HeaderWrap,
  HeaderInner,
  LogoWrap,
  ThemeToggle,
  UserProfile,
} from "components/sections/header/mobileNav/mobileNavStyles";

const MobileNav: NextPage = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <LogoWrap>Logo</LogoWrap>
        <ThemeToggle></ThemeToggle>
        <UserProfile></UserProfile>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default MobileNav;
