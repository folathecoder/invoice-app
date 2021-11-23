import type { NextPage } from "next";
import Image from "next/image";
import logo from "public/images/logo.svg";
import {
  HeaderWrap,
  HeaderInner,
  LogoWrap,
  Logo,
  ThemeToggle,
  UserProfile,
  UserImage,
} from "components/sections/header/mobileNav/mobileNavStyles";

const MobileNav: NextPage = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <LogoWrap>
          <Logo>
            <Image
              src={}
              alt="invoice app logo"
              layout="fill"
            />
          </Logo>
        </LogoWrap>
        <ThemeToggle>Temp</ThemeToggle>
        <UserProfile>
          <UserImage>
            <Image
              src="/public/images/image-avatar.jpg"
              alt="user name"
              layout="fill"
            />
          </UserImage>
        </UserProfile>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default MobileNav;
