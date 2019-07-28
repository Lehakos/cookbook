import React from 'react';

import { render } from 'libs/testHelpers';

import List from './List';

describe('<List />', () => {
  it('renders properly', () => {
    const { container } = render(<List items={['one', 'two', 'three']} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
