import React from 'react';
import { storiesOf } from '@storybook/react';

import { ListItem } from './list-item';

const stories = storiesOf('Atoms|ListItem', module);

stories.add('Default', () => <ListItem>Hello</ListItem>);
