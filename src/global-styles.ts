import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { prop } from 'styled-tools';

export const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.25;
  }

  body {
    font-family: ${prop<any>('theme.fonts.primary')};
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
`;
