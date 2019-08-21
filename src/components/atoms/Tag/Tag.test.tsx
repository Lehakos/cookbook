import React from 'react';

import { render } from 'libs/testHelpers';

import Tag from './Tag';

describe('<Tag />', () => {
  it('renders properly', () => {
    const { container } = render(<Tag />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
