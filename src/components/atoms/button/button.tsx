import React from 'react';

import * as s from './button.styles';

interface Props {
  /**
   * Design of button
   * @default 'primary'
   */
  variant?: s.Variant;
  disabled?: boolean;
}

export const Button: React.FunctionComponent<Props> = function({
  children,
  disabled,
  variant = 'primary',
  ...rest
}) {
  return (
    <s.Wrapper {...rest} disabled={disabled} variant={variant}>
      {children}
    </s.Wrapper>
  );
};
