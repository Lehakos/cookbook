import React from 'react';

import { render } from 'libs/testHelpers';

import Title from './Title';

describe('<Title />', () => {
  it('renders properly', () => {
    const { container } = render(<Title />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
