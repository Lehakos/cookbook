import styled from 'styled-components/macro';

import { typography, TypographyProps } from 'shared/styledProps';

export const Wrapper = styled.div<TypographyProps>`
  ${typography}
`;

export { TypographyProps };
