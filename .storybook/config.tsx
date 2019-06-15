import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withConsole } from '@storybook/addon-console';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';

import theme from 'shared/theme';

import GlobalStyles from '../src/GlobalStyles';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'ui-kit',
    }),
    sortStoriesByKind: true,
    hierarchyRootSeparator: '|',
    hierarchySeparator: '/',
    addonPanelInRight: true,
  },
});

addDecorator(withInfo());

addDecorator(withKnobs);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{ padding: '12px' }}>
      <GlobalStyles />
      {story()}
    </div>
  </ThemeProvider>
));

const req = require.context('../src', true, /\.story\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
