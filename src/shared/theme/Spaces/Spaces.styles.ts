import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const Wrapper = styled.div`
  margin: -${props => props.theme.space[2]}px;
`;

export const Item = styled.div`
  padding: ${props => props.theme.space[2]}px;
`;

export const Spaces = styled.div<SpaceProps>`
  ${space}

  background-color: #eee;
`;
