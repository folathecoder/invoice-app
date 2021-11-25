import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import {
  HeaderWrap,
  HeaderInner,
  LogoWrap,
  Logo,
  ThemeToggle,
  HeaderMenu,
  UserProfile,
} from "components/sections/header/mobileNav/mobileNavStyles";
import ThemeToggler from "components/slices/themeToggle/themeToggle";
import ProfileImage from "components/slices/profile/profileImage";

const MobileNav: NextPage = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <Link href="/">
          <LogoWrap>
            <Logo>
              <Image src={logo} alt="invoice app logo" layout="fill" />
            </Logo>
          </LogoWrap>
        </Link>
        <HeaderMenu>
          <ThemeToggle>
            <ThemeToggler />
          </ThemeToggle>
          <UserProfile>
            <ProfileImage />
          </UserProfile>
        </HeaderMenu>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default MobileNav;
