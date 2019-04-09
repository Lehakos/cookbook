import React from 'react';
import { storiesOf } from '@storybook/react';

import { space } from '../theme';
import Spaces from './Spaces';

const stories = storiesOf('Styles|Spaces', module);

stories.add('Default', () => <Spaces spaces={space} />);
