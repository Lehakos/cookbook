import React from 'react';

import * as s from './FloatingActionBtn.styles';

interface Props {
  disabled?: boolean;
  ariaLabel: string;
  /**
   * @default true
   */
  fixedPosition?: boolean;
}

const FloatingActionBtn: React.FunctionComponent<Props> = function({
  children,
  disabled,
  ariaLabel,
  fixedPosition = true,
  ...rest
}) {
  return (
    <s.Wrapper
      {...rest}
      aria-label={ariaLabel}
      fixedPosition={fixedPosition}
      disabled={disabled}
    >
      {children}
    </s.Wrapper>
  );
};

export default FloatingActionBtn;
