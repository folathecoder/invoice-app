import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const HeaderWrap = styled.header`
  background-color: var(--color-03);
  max-width: 100%;
  min-height: 0rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

export const HeaderInner = styled.div`
  max-width: 100%;
  min-height: 4.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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
