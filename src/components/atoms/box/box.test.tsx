import React from 'react';

import { render } from 'libs/test-helpers';

import { Box } from './box';

describe('<Box />', () => {
  it('renders properly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
