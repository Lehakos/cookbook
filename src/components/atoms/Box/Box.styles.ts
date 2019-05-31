import styled from 'styled-components';
import { borders, BorderProps } from 'styled-system';

import {
  layout, LayoutProps, flexbox, FlexboxProps,
} from 'libs/styledProps';

type WrapperProps = BorderProps & LayoutProps & FlexboxProps;

export const Box = styled.div<WrapperProps>`
  display: flex;

  ${borders}
  ${layout}
  ${flexbox}
`;
