import styled from 'styled-components';
import { borders, BorderProps } from 'styled-system';

import {
  layout, LayoutPropsWithAttrs, flexbox, FlexboxPropsWithAttrs,
} from 'shared/styledProps';

type WrapperProps = BorderProps &
LayoutPropsWithAttrs<HTMLDivElement> &
FlexboxPropsWithAttrs<HTMLDivElement>;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;

  ${borders}
  ${layout}
  ${flexbox}
`;
