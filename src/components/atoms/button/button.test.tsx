import React from 'react';

import { render } from 'libs/test-helpers';

import { Button } from './button';

describe('<Button />', () => {
  it('renders properly', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
