import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'libs/theme';

import GlobalStyles from './GlobalStyles';

const App: React.FunctionComponent<{}> = function () {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};

export default App;
