import { createGlobalStyle } from "styled-components";

// font-family: 'Amiri', serif;
// font-family: 'Anton', sans-serif;
// font-family: "Bahij", sans-serif;
// font-family: 'Roboto Serif', serif;
const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif,Cairo;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .headerMenu{
      display: none;  
    }
  }
  @media (min-width: 768px) {
    .menuIcon{
      display: none;
    }
  }
`;

export default GlobalStyle;
