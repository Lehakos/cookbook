export const colors = {
  primary: '#F47983',
  secondary: '#50c6c3',
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
  ],
};
type Colors = typeof colors;

export const space = [0, 2, 4, 8, 12, 16, 24, 32, 48];
type Spaces = typeof space;

export const sizes = [24, 32, 48, 64, 96, 128, 256];
type Sizes = typeof sizes;

export const heights = sizes;
type Heights = typeof heights;

type FontSizes = number[];
export const fontSizes = [12, 14, 16, 18, 20, 22, 24] as FontSizes;

type Shadows = string[];
export const shadows: Shadows = [
  '0 0 4px 0 rgba(0, 0, 0, .2)',
];

type Radii = number[];
export const radii: Radii = [2, 4];

type FontWeights = number[];
export const fontWeights: FontWeights = [300, 400, 600];

type Borders = string[];
export const borders: Borders = [`1px solid ${colors.grays[0]}`];

export const fonts = {
  primary: 'Open Sans, Verdana, Arial, sans-serif',
};
type Fonts = typeof fonts;

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
};

export default theme;
