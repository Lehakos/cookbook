import React from 'react';

import * as s from './Text.styles';

type Props = s.TypographyProps & {};

const Text: React.FunctionComponent<Props> = function ({ children, ...rest }) {
  return <s.Wrapper {...rest}>{children}</s.Wrapper>;
};

export default Text;
