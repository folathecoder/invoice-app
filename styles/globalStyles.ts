import styled, { createGlobalStyle, css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const GlobalStyles = createGlobalStyle`
    ///////////////////////////////////////////////////////
    // TODO: ROOT VALUES
    :root {
        // COLORS
        --color-01: hsl(252, 94%, 67%);
        --color-02: hsl(252, 100%, 73%);
        --color-03: hsl(233, 31%, 17%);
        --color-04: hsl(233, 30%, 21%);
        --color-05: hsl(231, 73%, 93%);
        --color-06:  hsl(231, 20%, 61%);
        --color-07: hsl(231, 37%, 63%);
        --color-08: hsl(228, 29%, 7%);
        --color-09: hsl(0, 80%, 63%);
        --color-10: hsl(0, 100%, 80%);
        --color-11: hsl(240, 27%, 98%);
        --color-12: hsl(233, 30%, 11%);

        // FONTS
        --font-pry-100: 'Manrope', sans-serif;
        --font-weight-medium: 500; 
        --font-weight-bold: 700; 

        // WIDTH
        --max-container: 69.375rem;
        --center-container: 0 auto;

        //BORDER
        --border-radius: 0.5rem;

        //ANIMATION 
        --transition: all 0.5s;
    }
    ///////////////////////////////////////////////////////
    //TODO: DEFAULT STYLE RESETS
    /* html {
        scrollbar-width: none;
    } */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    li {
        list-style: none;
    }

    //! Remove all animations and transitions for people that prefer not to see them
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
        scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* ::-webkit-scrollbar {
        display: none !important;
    } */

    ///////////////////////////////////////////////////////
    //TODO: BASE STYLES
    body {
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-400);
        background-color: var(--color-03);
        color: var(--color-pry-200);
        position: relative;
        --ms-overflow-style: none
    }

    ///////////////////////////////////////////////////////
    //TODO: TYPOGRAPHY
    /* a {
        text-decoration: none;
        color: var(--color-pry-300);
        font-size: 0.8125rem;
        line-height: 1.5625rem;
        letter-spacing: 0.1rem;
        display: flex;
        align-items: center;
        transition: var(--transition);
        &:hover {
            transition: var(--transition);
            color: var(--color-pry-100);
        }
        &:active {
            transition: var(--transition);
            color: var(--color-pry-100);
        }
    }
    p {
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        font-weight: var(--font-weight-100);
        letter-spacing: 0.05rem;
    }
    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: var(--font-weight-400);
        letter-spacing: 0.080625rem;
        @media ${QUERIES.tabletMini} {
            font-size: 3.5rem;
            line-height: 3.625rem;
        }
        @media ${QUERIES.tablet} {
            letter-spacing: 0.125rem;
        }
    }
    h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        letter-spacing: 0.1rem;
        @media ${QUERIES.mobile} {
            font-size: 3.5rem;
            line-height: 3.625rem;
        }
    }
    
    h3 {
        font-size: 0.9375rem;
        line-height: 1.2rem;
        letter-spacing: 0.1rem;
        @media ${QUERIES.tablet} {
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
    } */
    
`;

export const HiddenHeader = styled.h1`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;
