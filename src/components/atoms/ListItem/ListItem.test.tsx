import React from 'react';

import { render } from 'libs/testHelpers';

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('renders properly', () => {
    const { container } = render(<ListItem />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
