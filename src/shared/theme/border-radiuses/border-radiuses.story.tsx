import React from 'react';
import { storiesOf } from '@storybook/react';

import { radii } from '../theme';
import { BorderRadiuses } from './border-radiuses';

const stories = storiesOf('Styles|BorderRadiuses', module).addParameters({
  component: BorderRadiuses,
});

stories.add('Default', () => <BorderRadiuses radiuses={radii} />);
