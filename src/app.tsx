import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'shared/theme';

import { GlobalStyles } from './global-styles';

export const App: React.FunctionComponent<{}> = function() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};
