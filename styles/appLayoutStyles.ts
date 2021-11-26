import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const TemplateWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
`;
export const SideNavWrap = styled.aside`
  width: 6.4375rem;
  height: 100vh;
  position: fixed;
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
  }
`;
export const MainContent = styled.main`
  width: 100%;

  @media ${QUERIES.tablet} {
    margin-left: 6.4375rem;
  }
`;
