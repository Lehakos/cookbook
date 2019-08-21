import styled from 'styled-components';
import { size } from 'polished';
import { withProp, prop, ifProp, ifNotProp } from 'styled-tools';

export const ArrowButton = styled.button<{ prev?: boolean }>`
  ${withProp('theme.sizes.2', size)}

  position: absolute;
  top: 50%;
  left: ${ifProp('prev', 0, 'auto')};
  right: ${ifNotProp('prev', 0, 'auto')};
  z-index: ${prop('theme.zIndices.2')};

  border: none;
  padding: 0;

  background: transparent;
  transform: translateY(-50%);
  cursor: pointer;

  &::before {
    content: '';

    ${withProp('theme.sizes.0', size)}

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    border: 3px solid ${prop('theme.colors.primary')};
    border-top: none;
    border-right: none;

    transform: translateX(${ifProp('prev', '-25%', '-75%')}) translateY(-50%)
      rotate(${ifProp('prev', '45deg', '225deg')});
  }
`;
