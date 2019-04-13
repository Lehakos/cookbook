import React from 'react';
import { BorderProps } from 'styled-system';

import { LayoutProps, FlexboxProps } from 'shared/styledProps';

import * as s from './Box.styles';

type Props = LayoutProps & FlexboxProps & BorderProps & {};

const Box: React.FunctionComponent<Props> = function ({ children, ...rest }) {
  return <s.Wrapper {...rest}>{children}</s.Wrapper>;
};

export default Box;
