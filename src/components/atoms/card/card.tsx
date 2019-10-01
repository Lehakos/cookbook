import styled from 'styled-components';
import { prop } from 'styled-tools';
import { space, SpaceProps } from 'styled-system';

export const Card = styled.div<SpaceProps>`
  ${space}

  border-radius: ${prop('theme.radii.1')}px;
  box-shadow: ${prop('theme.shadows.0')};
  background: #fff;

  overflow: hidden;
`;
