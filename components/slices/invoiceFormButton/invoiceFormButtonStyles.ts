import styled from "styled-components";

export const InvMenuBtnWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const InvMenuBtn = styled.button`
  border: none;
  width: 5.625rem;
  height: 2.75rem;
  border-radius: 1.5rem;
  background-color: var(--color-01);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    flex: 1;
  }

  @media screen and (min-width: 462px) {
    width: 9.375rem;
    height: 3rem;
    justify-content: space-between;
  }
`;

export const InvMenuBtnIcon = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 462px) {
    display: flex;
    margin-left: 0.5rem;
  }
`;

export const InvMenuBtnIconInner = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: var(--color-11);
  display: grid;
  place-items: center;

  & > * {
    position: relative;
    width: 0.625rem;
    height: 0.625rem;
  }
`;

export const InvMenuBtnText = styled.div`
  p {
    font-weight: var(--font-weight-bold);
    font-family: var(--font-100);
    margin-left: -0.4rem;

    @media screen and (min-width: 462px) {
      margin-left: -1.5rem;
    }
  }
`;
