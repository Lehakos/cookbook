import React from 'react';

import * as s from './list-item.styles';

interface Props {
  oneLine?: boolean;
}

export const ListItem: React.FunctionComponent<Props> = function({
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
