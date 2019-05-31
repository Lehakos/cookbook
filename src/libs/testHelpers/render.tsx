import React, { ReactElement } from 'react';
import { render as baseRender } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import theme from 'libs/theme';

export const render = (el: ReactElement) =>
  baseRender(<ThemeProvider theme={theme}>{el}</ThemeProvider>);
