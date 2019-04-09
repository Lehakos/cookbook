import React from 'react';
import { storiesOf } from '@storybook/react';

import { fontSizes } from '../theme';
import FontSizes from './FontSizes';

const stories = storiesOf('Styles|FontSizes', module);

stories.add('Default', () => <FontSizes fontSizes={fontSizes} />);
