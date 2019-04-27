import {
  compose,
  display,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
  space,
  DisplayProps,
  WidthProps,
  MaxWidthProps,
  MinWidthProps,
  HeightProps,
  MaxHeightProps,
  MinHeightProps,
  SizeProps,
  VerticalAlignProps,
  SpaceProps,
} from 'styled-system';

export const layout = compose(
  display,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
  space,
);

export type LayoutProps = DisplayProps &
WidthProps &
MaxWidthProps &
MinWidthProps &
HeightProps &
MaxHeightProps &
MinHeightProps &
SizeProps &
VerticalAlignProps &
SpaceProps;
