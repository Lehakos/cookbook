import styled, { css } from 'styled-components';
import { size } from 'polished';
import { ifProp } from 'styled-tools';

export const Wrapper = styled.button`
  ${props => size(props.theme.sizes[2])}

  position: relative;

  border: none;
  padding: ${props => `${props.theme.space[5]}px ${props.theme.space[4]}px`};

  background: none;
  cursor: pointer;
`;

const lineStyle = css`
  position: absolute;
  left: 0;

  width: 100%;
  height: 2px;

  background: currentColor;
`;

export const Line = styled.span`
  ${lineStyle}

  top: 50%;

  transform: translateY(-50%);
`;

export const Box = styled.span<{ isOpen: boolean }>`
  position: relative;

  display: block;
  width: 100%;
  height: 100%;

  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &::before,
  &::after {
    ${lineStyle}

    content: '';
  }

  &::before {
    top: 0;

    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }

  &::after {
    bottom: 0;

    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${ifProp(
    'isOpen',
    css`
      transform: rotate(225deg);

      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      ${Line} {
      }

      &::before {
        top: 50%;

        opacity: 0;
        transform: translateY(-50%);

        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
      }

      &::after {
        bottom: 50%;

        transform: translateY(50%) rotate(-90deg);

        transition: bottom 0.1s ease-out,
          transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    `,
  )}
`;
