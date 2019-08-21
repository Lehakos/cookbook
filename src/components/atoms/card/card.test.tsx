import React from 'react';

import { render } from 'libs/test-helpers';

import { Card } from './card';

describe('<Card />', () => {
  it('renders properly', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
