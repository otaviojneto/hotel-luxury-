import { createGlobalStyle } from 'styled-components';

import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    color: ${Colors.secondary};
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button, a {
    cursor: pointer;
  }

  h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 70px;
    font-weight: 600;
    line-height: 60px;
  }

  h2 {
    font-size: 26px;
    letter-spacing: 8px;
    line-height: 30px;
  }

  h3 {
    font-family: 'Source Serif Pro', serif;
    font-size: 28px;
    line-height: 34px;
  }

  h4 {
    font-family: 'Source Serif Pro', serif;
    font-family: 'Source Serif Pro', serif;
    font-size: 18px;
    line-height: 28px;
  }

  h5 {
    font-family: 'Source Serif Pro', serif;
  }

  h6 {
    font-family: 'Source Serif Pro', serif;
  }
`;

export default GlobalStyle;
