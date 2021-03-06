import React from 'react';
import { storiesOf } from '@storybook/react';

import { TagsList } from './tags-list';

const stories = storiesOf('Molecules|TagsList', module).addParameters({
  component: TagsList,
});

stories.add('Default', () => (
  <TagsList
    items={[
      { id: 'a', value: 'Картофель' },
      { id: 'b', value: 'Морковь', color: '#F47983' },
      { id: 'c', value: 'Мясо', color: '#50C6C3' },
    ]}
  />
));
