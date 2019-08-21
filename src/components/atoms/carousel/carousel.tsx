import React from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';

import { theme } from 'shared/theme';

import * as s from './carousel.styles';

interface Props {
  arrows?: boolean;
  autoplaySpeed?: number;
  autoplay?: boolean;
  centerMode?: boolean;
  centerPadding?: string;
  className?: string;
  dots?: boolean;
  infinite?: boolean;
  lazyLoad?: 'ondemand' | 'progressive';
  slidesToShow?: number;
}

export const Carousel: React.FunctionComponent<Props> = function({
  children,
  arrows = true,
  autoplaySpeed = 3000,
  autoplay = false,
  centerMode = false,
  centerPadding = `${theme.space[6]}px`,
  className,
  dots = false,
  infinite = true,
  lazyLoad,
  slidesToShow = 1,
}) {
  return (
    <Slick
      nextArrow={<s.ArrowButton />}
      prevArrow={<s.ArrowButton prev />}
      arrows={arrows}
      autoplaySpeed={autoplaySpeed}
      autoplay={autoplay}
      centerMode={centerMode}
      centerPadding={centerPadding}
      className={className}
      dots={dots}
      infinite={infinite}
      lazyLoad={lazyLoad}
      slidesToShow={slidesToShow}
    >
      {children}
    </Slick>
  );
};
