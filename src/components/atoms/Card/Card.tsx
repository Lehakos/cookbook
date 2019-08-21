import styled from 'styled-components';
import { prop } from 'styled-tools';

const Card = styled.div`
  padding: ${prop('theme.space.4')}px ${prop('theme.space.5')}px;

  border-radius: ${prop('theme.radii.1')}px;
  box-shadow: ${prop('theme.shadows.0')};
  background: #fff;
`;

export default Card;
