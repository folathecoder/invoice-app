import styled, { css } from "styled-components";
import type { InvoiceStatusTypes } from "helpers/types/invoiceTypes";

export const InvoiceListWrap = styled.div<InvoiceStatusTypes>`
  background-color: var(--color-03);
  margin: 1rem 0rem;
  border-radius: var(--border-radius);
  box-shadow: 0rem 0rem 0.1rem var(--color-03);
  border: 0.1rem solid transparent;

  &:hover {
    transition: var(--transition);
    border-color: var(--color-pending);

    ${({ paid }) =>
      paid &&
      css`
        border-color: var(--color-paid);
      `}

    ${({ draft }) =>
      draft &&
      css`
        border-color: var(--color-draft);
      `}
  }

  @media screen and (max-width: 650px) {
    padding: 1.55rem 1.5rem;
  }
`;

export const InvoiceListInner = styled.div`
  width: 100%;
  min-height: 4.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 0.4fr;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 2rem);
    grid-template-areas:
      "A B"
      "C D"
      "E D";
  }

  @media screen and (max-width: 324px) {
    min-height: 10.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    /* grid-auto-rows: 2rem; */
    grid-template-areas:
      "A"
      "B"
      "C"
      "E"
      "D";

    & > * {
      min-height: 2rem;
    }
  }
`;

export const InvNumber = styled.div`
  p,
  span {
    font-weight: var(--font-weight-bold);
  }
  span {
    color: var(--color-07);
  }

  @media screen and (max-width: 650px) {
    grid-area: A;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media screen and (max-width: 324px) {
    align-items: center;
  }
`;

export const InvDueDate = styled.div`
  justify-content: flex-start;

  @media screen and (max-width: 650px) {
    grid-area: C;
    align-items: flex-end;
  }

  @media screen and (max-width: 324px) {
    align-items: center;
  }
`;

export const InvName = styled.div`
  justify-content: flex-start;

  @media screen and (max-width: 650px) {
    grid-area: B;
    justify-content: flex-end;
    align-items: flex-start;
  }

  @media screen and (max-width: 324px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

export const InvAmount = styled.div`
  justify-content: flex-end;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: var(--font-weight-bold);
  }

  @media screen and (max-width: 650px) {
    grid-area: E;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;
export const InvStatus = styled.div`
  justify-content: flex-end;

  @media screen and (max-width: 650px) {
    grid-area: D;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media screen and (max-width: 324px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.5rem 0rem;
  }
`;

export const InvIcon = styled.div`
  display: grid;
  place-items: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const InvIconWrap = styled.div`
  position: relative;
  object-fit: contain;
  width: 0.5rem;
  height: 0.6rem;
`;
