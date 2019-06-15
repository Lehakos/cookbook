import React from 'react';

import * as s from './Spaces.styles';

interface Props {
  spaces: readonly number[];
}

const Spaces: React.FunctionComponent<Props> = function ({ spaces }) {
  return (
    <s.Wrapper>
      {spaces.map((value, index) => (
        <s.Item key={value}>
          <s.Spaces p={index}>
            Space index:
            {' '}
            {index}
            ; Space value:
            {' '}
            {value}
            px
          </s.Spaces>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default Spaces;
