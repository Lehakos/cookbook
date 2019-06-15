import React from 'react';
import { storiesOf } from '@storybook/react';

import { colors } from '../theme';
import Color from './Colors';

const stories = storiesOf('Styles|Color', module);

const colorsArray: {
  key: string;
  value: string | readonly string[];
}[] = Object.entries(colors).map(([key, value]) => ({
  key,
  value,
}));

stories.add('Default', () => <Color colors={colorsArray} />);
