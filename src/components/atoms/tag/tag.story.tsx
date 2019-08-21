import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tag } from './tag';

const stories = storiesOf('Atoms|Tag', module);

stories
  .add('Default', () => <Tag>Картофель</Tag>)
  .add('Dark background', () => <Tag color="#38618C">Картофель</Tag>)
  .add('Light background', () => <Tag color="#F9ADA0">Картофель</Tag>);
