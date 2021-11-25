import styled from "styled-components";
import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import moonIcon from "public/images/icon-moon.svg";
import sunIcon from "public/images/icon-sun.svg";

export const Theme = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  background-color: transparent;
  position: relative;
  object-fit: contain;
  cursor: pointer;
`; 
const ThemeToggler: NextPage = () => {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <Theme onClick={handleClick}>
      {theme ? (
        <Image src={moonIcon} alt="activate dark mode" layout="fill" />
      ) : (
        <Image src={sunIcon} alt="activate light mode" layout="fill" />
      )}
    </Theme>
  );
};

export default ThemeToggler;
