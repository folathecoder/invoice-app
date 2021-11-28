import {
  HeaderWrap,
  HeaderInner,
  ThemeToggle,
  HeaderMenu,
  UserProfile,
} from "components/sections/header/desktopNav/desktopNavStyles";
import ThemeToggler from "components/slices/themeToggle/themeToggle";
import ProfileImage from "components/slices/profile/profileImage";
import NavLogo from "components/slices/navLogo/navLogo";

const DesktopNav = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <NavLogo />
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

export default DesktopNav;
