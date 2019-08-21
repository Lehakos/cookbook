import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as s from './tag.styles';

interface Props {
  color?: string;
}

export const Tag: React.FunctionComponent<Props> = function({
  color,
  children,
  ...rest
}) {
  const theme = useContext(ThemeContext);
  const computedColor = color || theme.colors.grays[0];

  return (
    <s.Wrapper {...rest} bgColor={computedColor}>
      {children}
    </s.Wrapper>
  );
};
