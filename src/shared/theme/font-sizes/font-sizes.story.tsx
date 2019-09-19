import React from 'react';
import { storiesOf } from '@storybook/react';

import { fontSizes } from '../theme';
import { FontSizes } from './font-sizes';

const stories = storiesOf('Styles|FontSizes', module).addParameters({
  component: FontSizes,
});

stories.add('Default', () => <FontSizes fontSizes={fontSizes} />);
