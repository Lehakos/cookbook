export const colors = {
  primary: '#F47983',
  secondary: '#63CCCA',
  contrast: '#38618C',
  notes: '#F9ADA0',
  text: '#3D3E3C',
};
type Colors = typeof colors;

export const space = [0, 2, 4, 8, 12, 16, 24, 32, 48];
type Spaces = typeof space;

export const widths = [24, 32, 48, 64, 96, 128, 256];
type Widths = typeof widths;

export const heights = [24, 32, 48, 64, 96, 128, 256];
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

export interface Theme {
  colors: Colors;
  space: Spaces;
  widths: Widths;
  heights: Heights;
  fontSizes: FontSizes;
  shadows: Shadows;
  radii: Radii;
  fontWeights: FontWeights;
}

const theme: Theme = {
  colors,
  space,
  widths,
  heights,
  fontSizes,
  shadows,
  radii,
  fontWeights,
};

export default theme;
