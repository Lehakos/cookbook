import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Title from './Title';

const stories = storiesOf('Atoms|Title', module);

stories
  .add('Default', () => <Title>This is a title!</Title>)
  .add('Show margin', () => (
    <Fragment>
      <Title>This is a title!</Title>
      <div>Some text</div>
    </Fragment>
  ));
