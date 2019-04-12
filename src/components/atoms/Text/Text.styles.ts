import styled from 'styled-components';

import { typography, TypographyProps } from 'shared/styledProps';

type WrapperProps = TypographyProps<HTMLDivElement>;

export const Wrapper = styled.div<WrapperProps>`
  ${typography}
`;

// eslint-disable-next-line no-undef
export { WrapperProps };
