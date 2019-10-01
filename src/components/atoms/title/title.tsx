import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';

const sizeMap = {
  l: 'theme.fontSizes.4',
  m: 'theme.fontSizes.3',
  s: 'theme.fontSizes.2',
};

type Size = 's' | 'm' | 'l';

export const Title = styled.h1<{ size?: Size }>`
  width: 100%;
  margin: 0;

  font-size: ${withProp('size', (size: Size) => prop(sizeMap[size]))};
  color: ${prop('theme.colors.primary')};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05rem;

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

Title.defaultProps = {
  size: 'l',
};
