import React from 'react';
import { storiesOf } from '@storybook/react';

import { shadows } from '../theme';
import { Shadows } from './shadows';

const stories = storiesOf('Styles|Shadows', module);

stories.add('Default', () => <Shadows shadows={shadows} />);
