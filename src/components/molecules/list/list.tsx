import React from 'react';

import { ListItem } from 'components/atoms';

import * as s from './list.styles';

interface Props {
  items: string[];
  oneLine?: boolean;
  /**
   * The maximum number of items for display
   */
  maxItems?: number;
}

export const List: React.FunctionComponent<Props> = function({
  items,
  oneLine,
  maxItems,
}) {
  const itemsForRender = items.slice(0, maxItems);
  const notShowedItems = items.length - itemsForRender.length;

  return (
    <s.Wrapper>
      {itemsForRender.map(item => (
        <ListItem oneLine={oneLine} key={item}>
          {item}
        </ListItem>
      ))}
      {notShowedItems > 0 && (
        <ListItem oneLine={oneLine}>More {notShowedItems}</ListItem>
      )}
    </s.Wrapper>
  );
};
