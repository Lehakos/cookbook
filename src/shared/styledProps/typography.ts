import { HTMLAttributes } from 'react';
import {
  compose,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

export const typography = compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
);

export type TypographyProps < T > = HTMLAttributes<T> &
FontFamilyProps &
FontSizeProps &
FontWeightProps &
LineHeightProps &
SpaceProps &
ColorProps;
