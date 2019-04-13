import styled from 'styled-components';

import { typography, TypographyProps, TypographyPropsWithAttrs } from 'shared/styledProps';

export const Wrapper = styled.div<TypographyPropsWithAttrs<HTMLDivElement>>`
  ${typography}
`;

export { TypographyProps };
