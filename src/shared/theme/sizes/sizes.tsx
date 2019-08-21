import React from 'react';

import * as s from './sizes.styles';

interface Props {
  sizes: readonly number[];
}

export const Sizes: React.FunctionComponent<Props> = function({ sizes }) {
  return (
    <s.Wrapper>
      {sizes.map((value, index) => (
        <s.Item key={value}>
          <s.Sizes size={index} />
          Size index: {index}; Size value: {value}px
        </s.Item>
      ))}
    </s.Wrapper>
  );
};
