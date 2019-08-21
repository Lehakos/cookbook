import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as s from './Tag.styles';

interface Props {
  color?: string;
}

const Tag: React.FunctionComponent<Props> = function({
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

export default Tag;
