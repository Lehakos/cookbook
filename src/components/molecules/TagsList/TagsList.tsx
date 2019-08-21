import React, { ReactNode } from 'react';

import Tag from 'components/atoms/Tag';

import * as s from './TagsList.styles';

interface Item {
  id: string;
  value: ReactNode;
  color?: string;
}

interface Props {
  items: Item[];
}

const TagsList: React.FunctionComponent<Props> = function({ items }) {
  return (
    <s.Wrapper>
      {items.map(item => (
        <s.Item key={item.id}>
          <Tag color={item.color}>{item.value}</Tag>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default TagsList;
