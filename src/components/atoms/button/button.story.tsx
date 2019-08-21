import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';

import { Button } from './button';

const stories = storiesOf('Atoms|Button', module);

stories.add('Default', () => (
  <Button
    disabled={boolean('disabled', false)}
    variant={select('variant', ['primary', 'secondary'], 'primary') as any}
  >
    Click me
  </Button>
));
