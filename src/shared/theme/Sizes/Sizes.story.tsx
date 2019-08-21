import React from 'react';
import { storiesOf } from '@storybook/react';

import { sizes } from '../theme';
import Sizes from './Sizes';

const stories = storiesOf('Styles|Sizes', module);

stories.add('Default', () => <Sizes sizes={sizes} />);
