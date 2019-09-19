import React from 'react';
import { storiesOf } from '@storybook/react';

import { space } from '../theme';
import { Spaces } from './spaces';

const stories = storiesOf('Styles|Spaces', module).addParameters({
  component: Spaces,
});

stories.add('Default', () => <Spaces spaces={space} />);
