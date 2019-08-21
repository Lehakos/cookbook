import React from 'react';

import { render } from 'libs/test-helpers';

import { Tag } from './tag';

describe('<Tag />', () => {
  it('renders properly', () => {
    const { container } = render(<Tag />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
