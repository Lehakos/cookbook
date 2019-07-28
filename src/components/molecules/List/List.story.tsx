import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';

const stories = storiesOf('Atoms|List', module);

stories
  .addDecorator(storyFn => <div style={{ width: '500px' }}>{storyFn()}</div>)
  .add('Default', () => (
    <List
      items={[
        'Et ex Lorem exercitation mollit proident quis dolore laborum in ex amet do nostrud. Exercitation aute sint est minim culpa laboris ea reprehenderit. Pariatur nulla Lorem ipsum veniam Lorem sunt incididunt quis excepteur ullamco minim.',
        'Et ex Lorem exercitation mollit proident quis dolore laborum in ex amet do nostrud. Exercitation aute sint est minim culpa laboris ea reprehenderit. Pariatur nulla Lorem ipsum veniam Lorem sunt incididunt quis excepteur ullamco minim.',
        'Et ex Lorem exercitation mollit proident quis dolore laborum in ex amet do nostrud. Exercitation aute sint est minim culpa laboris ea reprehenderit. Pariatur nulla Lorem ipsum veniam Lorem sunt incididunt quis excepteur ullamco minim.',
      ]}
    />
  ))
  .add('One line', () => (
    <List
      oneLine
      items={[
        'Et ex Lorem exercitation mollit proident quis dolore laborum in ex amet do nostrud. Exercitation aute sint est minim culpa laboris ea reprehenderit. Pariatur nulla Lorem ipsum veniam Lorem sunt incididunt quis excepteur ullamco minim.',
        'Et ex Lorem exercitation mollit proident quis dolore laborum in ex amet do nostrud. Exercitation aute sint est minim culpa laboris ea reprehenderit. Pariatur nulla Lorem ipsum veniam Lorem sunt incididunt quis excepteur ullamco minim.',
        'Et ex Lorem exercitation mollit proident quis dolore laborum in ex amet do nostrud. Exercitation aute sint est minim culpa laboris ea reprehenderit. Pariatur nulla Lorem ipsum veniam Lorem sunt incididunt quis excepteur ullamco minim.',
      ]}
    />
  ))
  .add('Hidden items', () => (
    <List maxItems={3} items={['One', 'Two', 'Three', 'Four', 'Five']} />
  ));
