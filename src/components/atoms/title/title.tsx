import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';
import { rem } from 'polished';

export const Title = styled.h1`
  margin: 0;
  margin-bottom: ${withProp('theme.space.4', rem)};

  font-size: ${prop('theme.fontSizes.4')};
  color: ${prop('theme.colors.primary')};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;
