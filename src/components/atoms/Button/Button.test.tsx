import React from 'react';

import { render } from 'libs/testHelpers';

import Button from './Button';

describe('<Button />', () => {
  it('renders properly', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
