import React from 'react';

import * as s from './ListItem.styles';

interface Props {
  oneLine?: boolean;
}

const ListItem: React.FunctionComponent<Props> = function({
  children,
  oneLine,
}) {
  return (
    <s.Wrapper>
      <s.Bullet />
      <s.Text oneLine={oneLine}>{children}</s.Text>
    </s.Wrapper>
  );
};

export default ListItem;
