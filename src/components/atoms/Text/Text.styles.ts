import styled from 'styled-components';

import { typography, TypographyProps } from 'libs/styledProps';

export const Text = styled.div<TypographyProps>`
  ${typography}
`;

export { TypographyProps };
