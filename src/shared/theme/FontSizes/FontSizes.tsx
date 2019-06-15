import React from 'react';

import * as s from './FontSizes.styles';

interface Props {
  fontSizes: readonly number[];
}

const FontSizes: React.FunctionComponent<Props> = function ({ fontSizes }) {
  return (
    <s.Wrapper>
      {fontSizes.map((value, index) => (
        <s.FontSize fontSize={index} key={value}>
          FontSize index:
          {' '}
          {index}
          ; FontSize value:
          {' '}
          {value}
          px
        </s.FontSize>
      ))}
    </s.Wrapper>
  );
};

export default FontSizes;
