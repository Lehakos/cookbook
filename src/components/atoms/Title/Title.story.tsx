import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title } from './title';

const stories = storiesOf('Atoms|Title', module).addParameters({
  component: Title,
});

stories
  .add('Default', () => <Title>This is a title!</Title>)
  .add('Show margin', () => (
    <>
      <Title>This is a title!</Title>
      <div>Some text</div>
    </>
  ));
