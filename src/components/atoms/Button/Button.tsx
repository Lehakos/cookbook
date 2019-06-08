import React, { ReactNode } from 'react';

import * as s from './Button.styles';

interface Props {
  children?: ReactNode;
  variant?: s.Variant;
}

const Button: React.FunctionComponent<Props> = function ({ children, variant = 'primary' }) {
  return <s.Wrapper variant={variant}>{children}</s.Wrapper>;
};

export default Button;
