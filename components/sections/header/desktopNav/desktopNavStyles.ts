import styled from "styled-components";

export const HeaderWrap = styled.header`
  background-color: var(--color-03);
  width: 100%;
  height: 100%;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
`;

export const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeaderMenu = styled.div``;

export const ThemeToggle = styled.div`
  width: 6.4375rem;
  height: 4.625rem;
  display: grid;
  place-items: center;
`;

export const UserProfile = styled.div`
  width: 6.4375rem;
  height: 6.4375rem;
  display: grid;
  place-items: center;
  border-top: 0.15rem solid hsl(232, 20%, 36%);
`;
