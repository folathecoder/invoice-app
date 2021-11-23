import styled from "styled-components";

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

  /* & > * {
    flex: 1;
  } */
`;

export const LogoWrap = styled.div`
  background-color: pink;
  /* width: 4.5rem;
  height: 4.5rem; */
`;
export const Logo = styled.div`
  background-color: green;
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  object-fit: fill;
`;
export const ThemeToggle = styled.div``;
export const UserProfile = styled.div`
  /* background-color: green; */
  width: 4.9375rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
  border-left: 0.06rem solid var(--color-07);
`;
export const UserImage = styled.div`
  background-color: white;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`;
