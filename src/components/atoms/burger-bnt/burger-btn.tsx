import React from 'react';

import { useControlledProp } from 'libs/hooks';
import { StrictUnion } from 'shared/types';

import * as s from './burger-btn.styles';

type BaseProps = {
  /**
   * Description for screenreaders.
   * @default 'Toggle menu'
   */
  ariaLabel?: string;
  /**
   * ID of assosiated menu. See https://webplatform.github.io/docs/aria/attributes/aria-controls/
   */
  ariaControls: string;
  initialIsOpen?: boolean;
};

type UpdateHandler = (isOpen: boolean) => void;

type ControlledIsOpen = {
  isOpen: boolean;
  onUpdateIsOpen: UpdateHandler;
};

type Props = BaseProps &
  StrictUnion<ControlledIsOpen | { onUpdateIsOpen?: UpdateHandler }>;

export const BurgerBtn = ({
  ariaLabel = 'Toggle menu',
  ariaControls,
  initialIsOpen = false,
  isOpen,
  onUpdateIsOpen,
}: Props) => {
  const [isOpenState, setIsOpen] = useControlledProp<boolean>(
    initialIsOpen,
    onUpdateIsOpen,
    isOpen,
  );

  const handleClick = () => {
    setIsOpen(!isOpenState);
  };

  return (
    <s.Wrapper
      onClick={handleClick}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
    >
      <s.Box isOpen={isOpenState}>
        <s.Line />
      </s.Box>
    </s.Wrapper>
  );
};
