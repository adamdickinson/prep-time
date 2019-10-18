import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #ECEFF1;
    --foreground: #37474F;
    --shade-1: #90A4AE;
    --primary: #FF8A80;
    background: var(--background);
    color: var(--foreground);
    font-family: Roboto, sans-serif;
  }

  #root {
    background: var(--background);
    box-shadow: 0 3px 6px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.12);
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 2.125rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1.5rem;
    color: #90A4AE;
  }

  p {
    margin: 1.5rem 0;
    &.note {
      color: #90A4AE;
    }
  }

  small {
    font-size: ${13 / 16}rem;
    font-weight: bold
    margin-right: 0.5rem;
    text-transform: uppercase;
    display: inline-block;
  }

  html, body {
    padding: 0;
    margin: 0;
  }
`;
