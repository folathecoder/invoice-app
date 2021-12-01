import styled, { css } from "styled-components";
import type { InvoiceStatusTypes } from "helpers/types/invoiceTypes";

export const StatusWrap = styled.div<InvoiceStatusTypes>`
  width: 6.5rem;
  height: 2.5rem;
  border-radius: var(--border-radius);
  background-color: hsla(34.11764705882353, 100%, 50%, 0.062);
  display: grid;
  place-items: center;

  ${({ paid }) =>
    paid &&
    css`
      background-color: #33d7a018;
    `}

  ${({ draft }) =>
    draft &&
    css`
      background-color: hsla(
        230.76923076923072,
        72.22222222222223%,
        92.94117647058823%,
        0.076
      );
    `}
`;
export const StatusInner = styled.div<InvoiceStatusTypes>`
  p {
    font-weight: var(--font-weight-bold);
    color: var(--color-pending);
    opacity: 1;

    ${({ paid }) =>
      paid &&
      css`
        color: var(--color-paid);
      `}

    ${({ draft }) =>
      draft &&
      css`
        color: var(--color-draft);
      `}
  }

  p::before {
    content: " ";
    position: absolute;
    background-color: var(--color-pending);
    width: 0.5rem;
    height: 0.5rem;
    margin-left: -0.9rem;
    margin-top: 0.2rem;
    border-radius: 100%;
    opacity: 1;

    ${({ paid }) =>
      paid &&
      css`
        background-color: var(--color-paid);
      `}

    ${({ draft }) =>
      draft &&
      css`
        background-color: var(--color-draft);
      `}
  }
`;
