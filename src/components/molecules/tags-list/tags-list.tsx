import React, { ReactNode } from 'react';

import { Tag } from 'components/atoms';

import * as s from './tags-list.styles';

interface Item {
  id: string;
  value: ReactNode;
  color?: string;
}

interface Props {
  items: Item[];
}

export const TagsList: React.FunctionComponent<Props> = function({ items }) {
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
