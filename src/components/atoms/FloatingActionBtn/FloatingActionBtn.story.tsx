import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import FloatingActionBtn from './FloatingActionBtn';

const stories = storiesOf('Atoms|FloatingActionBtn', module);

stories.add('Default', () => (
  <FloatingActionBtn
    ariaLabel="plus"
    fixedPosition={boolean('fixedPosition', false)}
  >
    +
  </FloatingActionBtn>
));
