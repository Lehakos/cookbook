import React from 'react';

import * as s from './Colors.styles';

type Props = {
  colors: { key: string; value: string }[];
};

const Color: React.FunctionComponent<Props> = function ({ colors }) {
  return (
    <s.Wrapper>
      {colors.map(color => (
        <s.Item key={color.key}>
          <s.Color>
            <s.ColorBox bg={color.key} />
            <s.Description>
              <s.Text fontSize={4} color="primary">
                {color.key}
              </s.Text>
              <s.Text fontSize={1} color="text">
                {color.value}
              </s.Text>
            </s.Description>
          </s.Color>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default Color;
