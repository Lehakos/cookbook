import styled, { css } from 'styled-components';
import { withProp, switchProp, prop } from 'styled-tools';
import { darken, lighten } from 'polished';

export type Variant = 'primary' | 'secondary';

const colorsMap = {
  primary: 'theme.colors.primary',
  secondary: 'theme.colors.secondary',
};

export const Wrapper = styled.button<{ variant: Variant }>`
  padding: ${prop<any>('theme.space.4')}px ${prop<any>('theme.space.6')}px;
  border: none;

  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  border-radius: ${prop<any>('theme.radii.1')}px;
  cursor: pointer;

  &[disabled] {
    cursor: default;
  }

  ${switchProp('variant', {
    primary: css`
      background: ${prop<any>(colorsMap.primary)};

      transition: background-color 0.2s;

      &:hover {
        background-color: ${withProp(colorsMap.primary, darken(0.02))};
      }

      &:active {
        background-color: ${withProp(colorsMap.primary, darken(0.05))};
      }

      &[disabled] {
        background-color: ${withProp(colorsMap.primary, lighten(0.07))};
      }
    `,
    secondary: css`
      background: ${prop<any>(colorsMap.secondary)};

      transition: background-color 0.2s;

      &:hover {
        background-color: ${withProp(colorsMap.secondary, darken(0.04))};
      }

      &:active {
        background-color: ${withProp(colorsMap.secondary, darken(0.08))};
      }

      &[disabled] {
        background-color: ${withProp(colorsMap.secondary, lighten(0.2))};
      }
    `,
  })}
`;
