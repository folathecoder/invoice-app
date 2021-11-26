import styled from "styled-components";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import logoBg from "public/images/logo-bg.svg";

export const LogoWrap = styled.a`
  background-color: var(--color-01);
  width: 4.5rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background-image: url(${logoBg});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;
export const Logo = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  position: relative;
  object-fit: fill;
`;


const NavLogo: NextPage = () => {
  return (
    <Link href="/">
      <LogoWrap>
        <Logo>
          <Image src={logo} alt="invoice app logo" layout="fill" />
        </Logo>
      </LogoWrap>
    </Link>
  );
};

export default NavLogo;
