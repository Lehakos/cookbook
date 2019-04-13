import { HTMLAttributes } from 'react';
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

type BaseLayoutProps = DisplayProps &
WidthProps &
MaxWidthProps &
MinWidthProps &
HeightProps &
MaxHeightProps &
MinHeightProps &
SizeProps &
VerticalAlignProps &
SpaceProps;

export type LayoutPropsWithAttrs < T > = HTMLAttributes<T> & BaseLayoutProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LayoutProps = BaseLayoutProps & { [prop: string]: any };
