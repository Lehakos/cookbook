import React from 'react';

import * as s from './Colors.styles';

interface ColorItemProps {
  color: {
    key: string;
    value: string;
  };
}

interface Props {
  colors: { key: string; value: string | readonly string[] }[];
}

const ColorItem: React.FunctionComponent<ColorItemProps> = function ({
  color,
}) {
  return (
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
  );
};

const Color: React.FunctionComponent<Props> = function ({ colors }) {
  return (
    <s.Wrapper flexDirection="column">
      {colors.map(color => (
        <s.Item key={color.key}>
          {Array.isArray(color.value) ? (
            <s.Wrapper flexDirection="row">
              {color.value.map((nestedColor, ind) => (
                <s.Item key={nestedColor}>
                  <ColorItem color={{ key: `${color.key}.${ind}`, value: nestedColor }} />
                </s.Item>
              ))}
            </s.Wrapper>
          ) : (
            <ColorItem color={color as ColorItemProps['color']} />
          )}
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default Color;
