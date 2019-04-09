import styled from 'styled-components/macro';
import { borderRadius, BorderRadiusProps } from 'styled-system';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${props => props.theme.space[2]}px;
`;

export const Item = styled.div`
  padding: ${props => props.theme.space[2]}px;
  width: ${(1 / 6) * 100}%;
  height: ${props => props.theme.heights[5]}px;
`;

export const BorderRadius = styled.div<BorderRadiusProps>`
  ${borderRadius}

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.space[4]}px;

  background-color: ${props => props.theme.colors.notes};
  overflow: hidden;
`;
