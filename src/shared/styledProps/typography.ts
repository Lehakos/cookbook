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

export type TypographyProps = FontFamilyProps &
FontSizeProps &
FontWeightProps &
LineHeightProps &
ColorProps &
SpaceProps & { [prop: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TypographyPropsWithAttrs < T > = HTMLAttributes<T> & TypographyProps;
