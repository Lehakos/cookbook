import React from 'react';
import { storiesOf } from '@storybook/react';

import { colors } from '../theme';
import { Colors } from './colors';

const stories = storiesOf('Styles|Colors', module);

const colorsArray: {
  key: string;
  value: string | readonly string[];
}[] = Object.entries(colors).map(([key, value]) => ({
  key,
  value,
}));

stories.add('Default', () => <Colors colors={colorsArray} />);
