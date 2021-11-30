import styled, { css } from "styled-components";

export const InvFilter = styled.div`
  width: 6.375rem;
  margin-right: 1.1875rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 416px) {
    width: 3.375rem;
  }
`;

export const InvFilterInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: var(--font-weight-bold);
  }
`;

export const InvFilterIcon = styled.div`
  position: relative;
  width: 0.62875rem;
  height: 0.464375rem;

  ${({ filterToggle }) =>
    filterToggle &&
    css`
      transform: rotateZ(180deg);
    `}
`;

export const InvFilterMenu = styled.div`
  position: absolute;
  margin-top: 11rem;
  margin-left: -4rem;
  background-color: var(--color-04);
  display: none;
  width: 12rem;
  height: 8rem;
  border-radius: var(--border-radius);
  box-shadow: 0rem 0rem 0.2rem var(--color-03);
  z-index: 10;
  display: none;
  align-items: center;

  ${({ filterToggle }) =>
    filterToggle &&
    css`
      display: flex;
    `}
`;

export const InvFilterForm = styled.form`
  margin-left: 1.4375rem;
  width: 100%;
`;

export const InvFilterFormField = styled.div`
  margin: 0.8rem 0rem;
  display: flex;

  label {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    font-weight: var(--font-weight-bold);
    margin-left: 0.75rem;
    display: block;
    flex: 1;
  }

  input {
    /* display: block; */
    appearance: none;
    -webkit-appearance: none;
    min-width: 1rem;
    min-height: 1rem;
    background-color: var(--color-03);
    border: 0.1rem solid var(--color-03);
    border-radius: 0.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:checked {
      transition: 0.5s ease-in-out;
      background-color: var(--color-01);
      border-color: var(--color-01);

      &::after {
        transition: 0.5s ease-in-out;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f00c";
        font-size: 0.6rem;
      }
    }

    &:hover {
      border: rem(0.5) solid #c058f3;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const Overlay = styled.div`
  /* background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  /* z-index: 10000; */
`;
