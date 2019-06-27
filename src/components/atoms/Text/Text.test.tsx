import React from 'react';

import { render } from 'libs/testHelpers';

import Text from './Text';

describe('<Text />', () => {
  it('renders properly', () => {
    const { container } = render(<Text />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
