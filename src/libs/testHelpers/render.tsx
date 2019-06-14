import React, { ReactElement } from 'react';
import { render as baseRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'shared/theme';

export const render = (el: ReactElement) =>
  baseRender(<ThemeProvider theme={theme}>{el}</ThemeProvider>);
