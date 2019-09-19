import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, color } from '@storybook/addon-knobs';

import { Icon, icons } from './icon';

const stories = storiesOf('Atoms|Icon', module).addParameters({
  component: Icon,
});

icons.forEach(icon => {
  stories.add(icon, () => (
    <Icon fill={color('fill', '#000')} size={number('size', 1)} icon={icon} />
  ));
});
