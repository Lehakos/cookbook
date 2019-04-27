import styled from 'styled-components';

import { typography, TypographyProps } from 'shared/styledProps';

export const Text = styled.div<TypographyProps>`
  ${typography}
`;

export { TypographyProps };
