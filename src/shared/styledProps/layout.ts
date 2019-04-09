import {
  compose,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
  space,
  DisplayProps,
  MaxWidthProps,
  MinWidthProps,
  HeightProps,
  MaxHeightProps,
  MinHeightProps,
  SizeProps,
  VerticalAlignProps,
  SpaceProps,
} from 'styled-system';

export const layout = compose({
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
  space,
});

export type LayoutProps = DisplayProps &
MaxWidthProps &
MinWidthProps &
HeightProps &
MaxHeightProps &
MinHeightProps &
SizeProps &
VerticalAlignProps &
SpaceProps;
