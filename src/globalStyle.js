import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'vt323';
    src: url('/assets/fonts/vt323.woff2') format('woff2'),
         url('assets/fonts/vt323.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

:root {

  --text-shadow-l: -4px -4px 0 #2B363B, 4px -4px 0 #2B363B,
    -4px 4px 0 #2B363B, 4px 4px 0 #2B363B;

  --light: #ffe3bb;
  --primary: #ffc3c2;
  --secondary: #f7a1c8;
  --tertiary: #976fb6;
  --dark: #715ba4
}


  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    cursor: url("/assets/point_sm.png"), auto;
  }
`;

export default GlobalStyle;
