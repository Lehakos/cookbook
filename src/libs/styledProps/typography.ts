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
  ColorStyleProps,
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
  ColorStyleProps &
  SpaceProps;
