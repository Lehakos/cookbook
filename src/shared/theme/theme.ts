import { darken, lighten } from 'polished';

const primaryColor = '#F47983';
const secondaryColor = '#50C6C3';

export const colors = {
  primary: primaryColor,
  primaryHover: darken(0.02)(primaryColor),
  primaryActive: darken(0.05)(primaryColor),
  primaryDisabled: lighten(0.07)(primaryColor),
  secondary: secondaryColor,
  secondaryHover: darken(0.04)(secondaryColor),
  secondaryActive: darken(0.08)(secondaryColor),
  secondaryDisabled: lighten(0.2)(secondaryColor),
  contrast: '#38618C',
  notes: '#F9ADA0',
  text: '#3D3E3C',
  grays: [
    '#CFD8D7',
    '#BDC5C4',
    '#AAB1B0',
    '#979E9D',
    '#848A89',
    '#717676',
  ] as const,
};
type Colors = typeof colors;

export const space = [0, 2, 4, 8, 12, 16, 24, 32, 48] as const;
type Spaces = typeof space;

export const sizes = [24, 32, 48, 64, 96, 128, 256] as const;
type Sizes = typeof sizes;

export const heights = sizes;
type Heights = typeof heights;

export const fontSizes = [12, 14, 16, 18, 20, 22, 24] as const;
type FontSizes = typeof fontSizes;

export const shadows = [
  '0 0 4px 0 rgba(0, 0, 0, .2)',
] as const;
type Shadows = typeof shadows;

export const radii = [2, 4] as const;
type Radii = typeof radii;

export const fontWeights = [300, 400, 600] as const;
type FontWeights = typeof fontWeights;

export const borders = [`1px solid ${colors.grays[0]}`] as const;
type Borders = typeof borders;

export const fonts = {
  primary: 'Open Sans, Verdana, Arial, sans-serif',
};
type Fonts = typeof fonts;

export const zIndices = [0, 1, 10, 100, 1000, 10000] as const;
type ZIndices = typeof zIndices;

export interface Theme {
  colors: Colors;
  space: Spaces;
  heights: Heights;
  fontSizes: FontSizes;
  shadows: Shadows;
  radii: Radii;
  fontWeights: FontWeights;
  borders: Borders;
  sizes: Sizes;
  fonts: Fonts;
  zIndices: ZIndices;
}

const theme: Theme = {
  colors,
  space,
  heights,
  fontSizes,
  shadows,
  radii,
  fontWeights,
  borders,
  sizes,
  fonts,
  zIndices,
};

export default theme;
