import React from 'react';
import { storiesOf } from '@storybook/react';

import { sizes } from '../theme';
import { Sizes } from './sizes';

const stories = storiesOf('Styles|Sizes', module).addParameters({
  component: Sizes,
});

stories.add('Default', () => <Sizes sizes={sizes} />);
