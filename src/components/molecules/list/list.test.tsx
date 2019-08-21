import React from 'react';

import { render } from 'libs/test-helpers';

import { List } from './list';

describe('<List />', () => {
  it('renders properly', () => {
    const { container } = render(<List items={['one', 'two', 'three']} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
