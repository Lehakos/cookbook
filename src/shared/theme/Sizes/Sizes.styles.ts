import styled from 'styled-components';
import { size, SizeProps } from 'styled-system';
import { prop } from 'styled-tools';

export const Wrapper = styled.div`
  margin: -${props => props.theme.space[2]}px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.space[2]}px;
`;

export const Sizes = styled.div<SizeProps>`
  ${size}
  margin-right: ${prop('theme.space.2')}px;

  background-color: #eee;
`;
