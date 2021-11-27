import styled from "styled-components";

export const InvoiceListWrap = styled.div`
  background-color: var(--color-04);
  margin: 1rem 0rem;
  border-radius: var(--border-radius);
  box-shadow: 0rem 0rem 0.1rem var(--color-04);
`;
export const InvoiceListInner = styled.div`
  max-width: 100%;
  min-height: 4.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 0.4fr;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const InvNumber = styled.div``;
export const InvDueDate = styled.div``;
export const InvName = styled.div``;

export const InvAmount = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: var(--font-weight-bold);
  }
`;
export const InvStatus = styled.div`
  width: 10rem;
`;
export const InvIcon = styled.div`
  display: grid;
  place-items: center;
`;

export const InvIconWrap = styled.div`
  position: relative;
  object-fit: contain;
  width: 0.5rem;
  height: 0.5rem;
`;
