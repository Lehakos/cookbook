import React from 'react';

import { render } from 'libs/test-helpers';

import { ListItem } from './list-item';

describe('<ListItem />', () => {
  it('renders properly', () => {
    const { container } = render(<ListItem />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
