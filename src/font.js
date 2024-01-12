import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
/* latin */
@font-face {
  font-family: 'Yantramanav';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/yantramanav/v13/flUhRqu5zY00QEpyWJYWN58AfvNeKBM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;
export { GlobalStyle };