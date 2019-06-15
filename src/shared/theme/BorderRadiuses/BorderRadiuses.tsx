import React from 'react';

import * as s from './BorderRadiuses.styles';

interface Props {
  radiuses: readonly number[];
}

const BorderRadiuses: React.FunctionComponent<Props> = function ({ radiuses }) {
  return (
    <s.Wrapper>
      {radiuses.map((value, index) => (
        <s.Item key={value}>
          <s.BorderRadius borderRadius={index}>
            <div>
              BorderRadius index: {index}
            </div>
            <br />
            <div>
              BorderRadius value: {value}px
            </div>
          </s.BorderRadius>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default BorderRadiuses;
