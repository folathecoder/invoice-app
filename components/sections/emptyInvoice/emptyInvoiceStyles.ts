import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const EmptyWrap = styled.section`
  margin-top: 6.1875rem;
`;
export const EmptyImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const EmptyImage = styled.div`
  position: relative;
  object-fit: contain;
  width: 12.066875rem;
  height: auto;

  @media ${QUERIES.tabletMini} {
    width: 15.08375rem;
    height: auto;
  }
`;
export const EmptyContent = styled.div`
  text-align: center;

  h2 {
    margin: 1.8125rem 0rem 0.5rem 0rem;

    @media ${QUERIES.tabletMini} {
      margin: 3.9375rem 0rem 0.5rem 0rem;
    }
  }

  p {
    max-width: 12.4375rem;
    margin: 0 auto;
    line-height: 1.2rem;

    @media ${QUERIES.mobile} {
      max-width: 13rem;
    }
  }

  span {
    font-weight: var(--font-weight-bold);
  }
`;
