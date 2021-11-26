import styled from "styled-components";
// import logoBg from "public/images/logo-bg.svg";

export const HeaderWrap = styled.header`
  background-color: var(--color-04);
  max-width: 100%;
  min-height: 0rem;
`;

export const HeaderInner = styled.div`
  max-width: 100%;
  min-height: 4.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */

  /* & > * {
    flex: 1;
  } */
`;

// export const LogoWrap = styled.a`
//   background-color: var(--color-01);
//   width: 4.5rem;
//   height: 4.5rem;
//   display: grid;
//   place-items: center;
//   border-radius: 0rem 1.25rem 1.25rem 0rem;
//   background-image: url(${logoBg});
//   background-repeat: no-repeat;
//   background-size: contain;
//   cursor: pointer;
// `;
// export const Logo = styled.div`
//   width: 1.75rem;
//   height: 1.75rem;
//   position: relative;
//   object-fit: fill;
// `;

export const HeaderMenu = styled.div`
  display: flex;
`;

export const ThemeToggle = styled.div`
  width: 4rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
`;

export const UserProfile = styled.div`
  width: 4.9375rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
  border-left: 0.15rem solid hsl(232, 20%, 36%);
`;

