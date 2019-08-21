import React from 'react';

import * as s from './border-radiuses.styles';

interface Props {
  radiuses: readonly number[];
}

export const BorderRadiuses: React.FunctionComponent<Props> = function({
  radiuses,
}) {
  return (
    <s.Wrapper>
      {radiuses.map((value, index) => (
        <s.Item key={value}>
          <s.BorderRadius borderRadius={index}>
            <div>BorderRadius index: {index}</div>
            <br />
            <div>BorderRadius value: {value}px</div>
          </s.BorderRadius>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};
