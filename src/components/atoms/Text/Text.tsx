import styled from 'styled-components';

import { typography, TypographyProps } from 'libs/styledProps';

const Text = styled.div<TypographyProps>`
  ${typography}
`;

export default Text;
