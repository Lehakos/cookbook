import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

export type Variant = 'primary' | 'secondary';

export const Wrapper = styled.button<{ variant: Variant }>`
  padding: ${prop<any>('theme.space.4')}px ${prop<any>('theme.space.6')}px;
  border: none;

  color: #fff;
  text-transform: uppercase;

  border-radius: ${prop<any>('theme.radii.1')}px;
  cursor: pointer;

  ${switchProp('variant', {
    primary: css`
      background: ${prop<any>('theme.colors.primary')};
    `,
    secondary: css`
      background: ${prop<any>('theme.colors.primary')};
    `,
  })}
`;
