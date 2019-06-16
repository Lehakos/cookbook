import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Wrapper = styled.div<{ width: string; height: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: ${prop('width')};
  height: ${prop('height')};

  text-align: center;

  background-color: ${prop('theme.colors.grays.0')};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Size = styled.span`
  font-size: ${prop('theme.fontSizes.6')};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
