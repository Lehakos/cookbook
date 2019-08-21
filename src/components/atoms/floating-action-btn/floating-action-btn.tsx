import React from 'react';

import * as s from './floating-action-btn.styles';

interface Props {
  disabled?: boolean;
  /**
   * Description for screenreaders
   */
  ariaLabel: string;
  /**
   * Show button in right bottom angle with position: fixed
   * @default true
   */
  fixedPosition?: boolean;
}

export const FloatingActionBtn: React.FunctionComponent<Props> = function({
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
