import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Text from './Text';

const stories = storiesOf('Atoms|Text', module);

stories
  .add('No props', () => <Text>Some text</Text>)
  .add('Color prop', () => (
    <Text
      color={select(
        'color',
        ['primary', 'secondary', 'contrast', 'text'],
        'primary',
      )}
    >
      Some text
    </Text>
  ))
  .add('FontSize prop', () => (
    <Text fontSize={select('fontSize', [0, 1, 2, 3, 4], 3)}>Some text</Text>
  ))
  .add('FontWeight prop', () => (
    <Text fontWeight={select('fontWeight', [0, 1, 2], 2)}>Some text</Text>
  ));
