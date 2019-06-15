import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

export type Variant = 'primary' | 'secondary';

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
      background: ${prop<any>('theme.colors.primary')};

      transition: background-color 0.2s;

      &:hover {
        background-color: ${prop<any>('theme.colors.primaryHover')};
      }

      &:active {
        background-color: ${prop<any>('theme.colors.primaryActive')};
      }

      &[disabled] {
        background-color: ${prop<any>('theme.colors.primaryDisabled')};
      }
    `,
    secondary: css`
      background: ${prop<any>('theme.colors.secondary')};

      transition: background-color 0.2s;

      &:hover {
        background-color: ${prop<any>('theme.colors.secondaryHover')};
      }

      &:active {
        background-color: ${prop<any>('theme.colors.secondaryActive')};
      }

      &[disabled] {
        background-color: ${prop<any>('theme.colors.secondaryDisabled')};
      }
    `,
  })}
`;
