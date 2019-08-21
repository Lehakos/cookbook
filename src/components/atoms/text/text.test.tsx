import React from 'react';

import { render } from 'libs/test-helpers';

import { Text } from './text';

describe('<Text />', () => {
  it('renders properly', () => {
    const { container } = render(<Text />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
