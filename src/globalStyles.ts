import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&display=swap');
  *{
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    font-size: 10px;
  }


  @media (max-width: 768px) {
    * {
      font-size: 8px;
    }
  }

  a {
    font-weight: 500;
    text-decoration: inherit;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }
`;
