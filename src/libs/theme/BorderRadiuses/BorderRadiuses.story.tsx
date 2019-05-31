import React from 'react';
import { storiesOf } from '@storybook/react';

import { radii } from '../theme';
import BorderRadiuses from './BorderRadiuses';

const stories = storiesOf('Styles|BorderRadiuses', module);

stories.add('Default', () => <BorderRadiuses radiuses={radii} />);
