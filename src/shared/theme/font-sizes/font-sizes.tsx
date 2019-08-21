import React from 'react';

import * as s from './font-sizes.styles';

interface Props {
  fontSizes: readonly string[];
}

export const FontSizes: React.FunctionComponent<Props> = function({
  fontSizes,
}) {
  return (
    <s.Wrapper>
      {fontSizes.map((value, index) => (
        <s.FontSize fontSize={index} key={value}>
          FontSize index: {index}; FontSize value: {value}
        </s.FontSize>
      ))}
    </s.Wrapper>
  );
};
