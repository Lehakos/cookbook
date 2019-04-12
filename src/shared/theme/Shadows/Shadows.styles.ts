import styled from 'styled-components';
import { boxShadow, BoxShadowProps } from 'styled-system';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${props => props.theme.space[2]}px;
`;

export const Item = styled.div`
  padding: ${props => props.theme.space[2]}px;
  width: ${(1 / 6) * 100}%;
`;

export const Shadow = styled.div<BoxShadowProps>`
  ${boxShadow}

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: ${props => props.theme.heights[5]}px;
  padding: ${props => props.theme.space[4]}px;
`;
