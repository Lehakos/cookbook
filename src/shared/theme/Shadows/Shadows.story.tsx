import React from 'react';
import { storiesOf } from '@storybook/react';

import { shadows } from '../theme';
import { Shadows } from './shadows';

const stories = storiesOf('Styles|Shadows', module).addParameters({
  component: Shadows,
});

stories.add('Default', () => <Shadows shadows={shadows} />);
