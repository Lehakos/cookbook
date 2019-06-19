import React, { Children } from 'react';

import { StrictUnion } from 'shared/types';

import * as s from './ImagePlaceholder.styles';

interface Size {
  width: number;
  height: number;
}

export type Props = {
  responsive?: boolean;
} & StrictUnion<Size | {}>;

export const DEFAULT_WIDTH = 480;
export const DEFAULT_HEIGHT = 360;

const ImagePlaceholder: React.FunctionComponent<Props> = function({
  width,
  height,
  responsive,
  children,
}) {
  const computedWidth = width || DEFAULT_WIDTH;
  const computedHeight = height || DEFAULT_HEIGHT;
  const hasChildren = Children.toArray(children).some(Boolean);

  const getWidth = () => {
    if (responsive) return '100%';
    return `${computedWidth}px`;
  };

  const getHeight = () => {
    if (!responsive || !hasChildren) return `${computedHeight}px`;
    return 'auto';
  };

  return (
    <s.Wrapper width={getWidth()} height={getHeight()}>
      {hasChildren ? (
        children
      ) : (
        <s.Size aria-hidden>
          {computedWidth} x {computedHeight}
        </s.Size>
      )}
    </s.Wrapper>
  );
};

export default ImagePlaceholder;
