import React from 'react';

import { useControlledProp } from 'libs/useControlledProp';
import { StrictUnion } from 'shared/types';

import * as s from './BurgerBtn.styles';

type BaseProps = {
  /**
   * Описание того что делает эта кнопка для скринридеров.
   * @default 'Menu'
   */
  ariaLabel?: string;
  /**
   * ID меню, с которым связана эта кнопка. Смотри https://webplatform.github.io/docs/aria/attributes/aria-controls/
   */
  ariaControls: string;
  initialIsOpen?: boolean;
};

type ControlledIsOpen = {
  isOpen: boolean;
  onUpdateIsOpen: (isOpen: boolean) => void;
};

type Props = BaseProps & StrictUnion<ControlledIsOpen | {}>;

export default ({
  ariaLabel = 'Menu',
  ariaControls,
  initialIsOpen = false,
  isOpen,
  onUpdateIsOpen,
}: Props) => {
  const [isOpenState, setIsOpen] = useControlledProp<boolean>(
    initialIsOpen,
    isOpen,
    onUpdateIsOpen,
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
