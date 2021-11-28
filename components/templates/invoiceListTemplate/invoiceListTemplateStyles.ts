import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const TemplateWrap = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 0rem 1.4375rem;
`;

export const TemplateInner = styled.section`
  max-width: 45.625rem;
  min-height: 10rem;
  margin: 2.875rem auto 2.875rem auto;

  @media ${QUERIES.tabletMini} {
    margin: 3.4375rem auto 3.4375rem auto;
  }

  @media ${QUERIES.tablet} {
    margin: 4.4375rem auto 4.4375rem auto;
  }
`;
export const InvoiceWrap = styled.section`
  max-width: 100%;
  min-height: 10rem;
`;
