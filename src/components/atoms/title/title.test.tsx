import React from 'react';

import { render } from 'libs/test-helpers';

import { Title } from './title';

describe('<Title />', () => {
  it('renders properly', () => {
    const { container } = render(<Title />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
