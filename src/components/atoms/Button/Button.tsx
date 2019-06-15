import React, { ReactNode } from 'react';

import * as s from './Button.styles';

interface Props {
  children?: ReactNode;
  variant?: s.Variant;
  disabled?: boolean;
}

const Button: React.FunctionComponent<Props> = function ({
  children,
  disabled,
  variant = 'primary',
}) {
  return (
    <s.Wrapper disabled={disabled} variant={variant}>
      {children}
    </s.Wrapper>
  );
};

export default Button;
