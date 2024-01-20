import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --gray-100: #F0F2F5;
    --gray-300: #D8DDE9;
    --gray-700: #969CB2;
    --gray-800: #363F5F;
    --gray-850: #252960;

    --blue-500: #6933FF;
    --blue-700: #2E117B;
    --green-500: #33CC95;
    --orange-500: #FF5B5B;
  }

  @media (max-widht: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  @media (max-widht: 720px) {
    html {
      font-size: 87.55%; /* 14px */
    }
  }

  body {
    background: var(--gray-100);
    color: var(--gray-800);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
