import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { boolean, number } from '@storybook/addon-knobs';
import { Carousel } from './carousel';

const stories = storiesOf('Atoms|Carousel', module);

const SlideWrapper = styled.div`
  height: 250px;

  background: ${props => props.theme.colors.grays[0]};
`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

stories.add('Default', () => (
  <Carousel
    arrows={boolean('arrows', true)}
    autoplaySpeed={number('autoplaySpeed', 3000, {
      step: 1000,
      range: false,
      min: 0,
      max: 100000,
    })}
    autoplay={boolean('autoplay', false)}
    centerMode={boolean('centerMode', false)}
    dots={boolean('dots', false)}
    slidesToShow={number('slidesToShow', 1)}
  >
    <SlideWrapper>
      <Slide>1</Slide>
    </SlideWrapper>
    <SlideWrapper>
      <Slide>2</Slide>
    </SlideWrapper>
    <SlideWrapper>
      <Slide>3</Slide>
    </SlideWrapper>
  </Carousel>
));
