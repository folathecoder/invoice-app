import styled from "styled-components";

export const InvMenuWrap = styled.section`
  max-width: 100%;
  min-height: 2.75rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const InvMenuInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 314px) {
    flex-direction: column;
  }
`;

export const InvMenuContent = styled.div`
  width: 100%;

  p {
    letter-spacing: 0rem;
  }
`;

export const InvMenuOption = styled.div`
  display: flex;

  @media screen and (max-width: 314px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 214px) {
    flex-direction: column;

    & > * {
      min-height: 3rem;
    }
  }
`;
