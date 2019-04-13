import styled from 'styled-components';
import {
  color, ColorProps, flexDirection, FlexDirectionProps,
} from 'styled-system';

import { typography, TypographyPropsWithAttrs } from 'shared/styledProps';

export const Wrapper = styled.div<FlexDirectionProps>`
  ${flexDirection}

  display: flex;
  margin: -${props => props.theme.space[2]}px;
`;

export const Item = styled.div`
  flex: 0 0 auto;
  padding: ${props => props.theme.space[2]}px;
  overflow-y: auto;
`;

export const Color = styled.div`
  width: ${props => props.theme.sizes[6]}px;

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

export const Text = styled.div<TypographyPropsWithAttrs<HTMLDivElement>>`
  ${typography}
`;
