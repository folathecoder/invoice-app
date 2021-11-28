import styled, { css } from "styled-components";

const StatusWrap = styled.div`
  width: 6.5rem;
  height: 2.5rem;
  border-radius: var(--border-radius);
  background-color: hsla(34.11764705882353, 100%, 50%, 0.062);
  display: grid;
  place-items: center;

  ${({paid}) =>
    paid &&
    css`
      background-color: #33d7a018;
    `}

  ${({draft}) =>
    draft &&
    css`
      background-color: hsla(230.76923076923072, 72.22222222222223%, 92.94117647058823%, 0.076);
    `}
`;
const StatusInner = styled.div`
  p {
    font-weight: var(--font-weight-bold);
    color: hsl(34, 100%, 50%);
    opacity: 1;

    ${({paid}) =>
      paid &&
      css`
        color: hsl(160, 67%, 52%);
      `}

    ${({draft}) =>
      draft &&
      css`
        color: hsl(231, 73%, 93%);
      `}
  }

  p::before {
    content: " ";
    position: absolute;
    background-color: hsl(34, 100%, 50%);
    width: 0.5rem;
    height: 0.5rem;
    margin-left: -0.9rem;
    margin-top: 0.2rem;
    border-radius: 100%;
    opacity: 1;

    ${({paid}) =>
      paid &&
      css`
        background-color: hsl(160, 67%, 52%);
      `}

    ${({draft}) =>
      draft &&
      css`
        background-color: hsl(231, 73%, 93%);
      `}
  }
`;

interface InvoiceStatusTypes {
  paid?: boolean,
  pending?: boolean,
  draft?: boolean,
}

const InvoiceStatus = ({ paid, pending, draft }: InvoiceStatusTypes) => {
  return (
    <StatusWrap pending={pending} paid={paid} draft={draft}>
      <StatusInner pending={pending} paid={paid} draft={draft}>
        {paid && <p>Paid</p>}
        {pending && <p>Pending</p>}
        {draft && <p>Draft</p>}
      </StatusInner>
    </StatusWrap>
  );
};

export default InvoiceStatus;
