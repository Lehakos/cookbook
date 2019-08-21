import styled, { css } from 'styled-components';
import { prop, withProp, ifProp } from 'styled-tools';
import { size, ellipsis } from 'polished';

export const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;

  &:not(:last-child) {
    margin-bottom: ${prop('theme.space.2')}px;
  }
`;

export const Text = styled.span<{ oneLine?: boolean }>`
  ${ifProp(
    'oneLine',
    css`
      ${ellipsis()}
    `,
  )};
`;

export const Bullet = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${prop('theme.space.3')}px;

  &::before {
    content: 'A';

    width: 0;

    visibility: hidden;
  }

  &::after {
    ${withProp('theme.space.2', size)};

    content: '';

    border-radius: 50%;
    background: ${prop('theme.colors.primary')};
  }
`;
