import React, { Children, useRef } from 'react';

import { StrictUnion } from 'shared/types';

import { useElementSize } from 'libs/hooks';
import * as s from './image-placeholder.styles';

interface Size {
  width: number | string;
  height: number | string;
}

export type Props = {
  responsive?: boolean;
} & StrictUnion<Size | {}>;

export const DEFAULT_WIDTH = 480;
export const DEFAULT_HEIGHT = 360;

export const ImagePlaceholder: React.FunctionComponent<Props> = function({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  responsive,
  children,
}) {
  const hasChildren = Children.toArray(children).some(Boolean);
  const elRef = useRef(null);
  const renderedSize = useElementSize(elRef);

  const getWidth = () => {
    if (responsive) return '100%';
    return typeof width === 'string' ? width : `${width}px`;
  };

  const getHeight = () => {
    if (responsive && hasChildren) return 'auto';
    return typeof height === 'string' ? height : `${height}px`;
  };

  return (
    <s.Wrapper ref={elRef} width={getWidth()} height={getHeight()}>
      {hasChildren ? (
        children
      ) : (
        <s.Size aria-hidden>
          {renderedSize.width} x {renderedSize.height}
        </s.Size>
      )}
    </s.Wrapper>
  );
};
