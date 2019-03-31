import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withConsole } from '@storybook/addon-console';
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'CookBook ui-kit'
    }),
    sortStoriesByKind: true,
    hierarchyRootSeparator: '|',
    hierarchySeparator: '/'
  }
});

addDecorator(withInfo());

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const req = require.context('../src', true, /\.story\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
