import React from 'react';

import * as s from './Text.styles';

const Text: React.FunctionComponent<s.TypographyProps> = function ({ children, ...rest }) {
  return <s.Wrapper {...rest}>{children}</s.Wrapper>;
};

export default Text;
