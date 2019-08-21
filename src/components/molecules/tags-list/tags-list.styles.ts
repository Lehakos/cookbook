import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -${prop('theme.space.3')}px;
  padding: 0;
  min-width: 100%;

  list-style: none;
`;

export const Item = styled.li`
  padding: ${prop('theme.space.2')}px;
`;
