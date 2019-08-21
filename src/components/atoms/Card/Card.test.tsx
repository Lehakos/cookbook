import React from 'react';

import { render } from 'libs/testHelpers';

import Card from './Card';

describe('<Card />', () => {
  it('renders properly', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
