import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Title } from './title';

const stories = storiesOf('Atoms|Title', module).addParameters({
  component: Title,
});

stories
  .add('Default', () => <Title>This is a title!</Title>)
  .add('Show margin', () => (
    <>
      <Title size={select('size', ['s', 'm', 'l'], 'l')}>
        This is a title!
      </Title>
      <div>Some text</div>
    </>
  ));
