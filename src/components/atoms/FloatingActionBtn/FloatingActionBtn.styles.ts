import styled, { css } from 'styled-components';
import { size } from 'polished';
import { withProp, prop, ifProp } from 'styled-tools';

export const Wrapper = styled.button<{ fixedPosition?: boolean }>`
  ${withProp('theme.sizes.3', size)}

  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  border: none;

  color: #fff;

  background-color: ${prop('theme.colors.primary')};
  border-radius: 50%;
  box-shadow: ${prop('theme.shadows.0')};
  cursor: pointer;

  &:hover {
    background-color: ${prop('theme.colors.primaryHover')};
  }

  &:active {
    background-color: ${prop('theme.colors.primaryActive')};
  }

  &[disabled] {
    background-color: ${prop('theme.colors.primaryDisabled')};
    cursor: default;
  }

  ${ifProp(
    'fixedPosition',
    css`
      position: fixed;
      bottom: ${prop<any>('theme.space.6')}px;
      right: ${prop<any>('theme.space.6')}px;
      z-index: ${prop<any>('theme.zIndices.3')};
    `,
  )}
`;
