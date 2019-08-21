import React from 'react';
import { storiesOf } from '@storybook/react';

import { ImageLoader } from './image-loader';

const stories = storiesOf('Molecules|ImageLoader', module);

stories
  .add('Fixed size', () => (
    <ImageLoader
      width={320}
      height={240}
      alt="nature"
      src="https://placeimg.com/320/240/nature"
    />
  ))
  .add('Responsive', () => (
    <ImageLoader
      responsive
      alt="animals"
      src="https://placeimg.com/1280/960/animals"
    />
  ))
  .add('Get image size', () => (
    <ImageLoader alt="arch" src="https://placeimg.com/640/480/arch" />
  ))
  .add('Fail to load image', () => (
    <ImageLoader alt="arch" src="https://placeimg.com" />
  ));
