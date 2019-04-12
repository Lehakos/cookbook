import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

import { typography, TypographyProps } from 'shared/styledProps';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${props => props.theme.space[2]}px;
`;

export const Item = styled.div`
  flex: 0 0 auto;
  width: ${(1 / 6) * 100}%;
  padding: ${props => props.theme.space[2]}px;
`;

export const Color = styled.div`
  box-shadow: ${props => props.theme.shadows[0]};
  border-radius: ${props => props.theme.radii[1]};
  overflow: hidden;
`;

export const ColorBox = styled.div<ColorProps>`
  ${color}

  width: 100%;
  height: ${props => props.theme.heights[4]}px;
`;

export const Description = styled.div`
  padding: ${props => props.theme.space[4]}px;
`;

export const Text = styled.div<TypographyProps<HTMLDivElement>>`
  ${typography}
`;
