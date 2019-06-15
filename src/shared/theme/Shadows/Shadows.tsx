import React from 'react';

import * as s from './Shadows.styles';

interface Props {
  shadows: readonly string[];
}

const Shadows: React.FunctionComponent<Props> = function ({ shadows }) {
  return (
    <s.Wrapper>
      {shadows.map((shadow, index) => (
        <s.Item key={shadow}>
          <s.Shadow boxShadow={index}>
            <p>
              Shadow index:
              {index}
            </p>
            <p>
              Shadow value:
              <br />
              {shadow}
            </p>
          </s.Shadow>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default Shadows;
