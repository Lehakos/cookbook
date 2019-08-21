import React from 'react';

import { render } from 'libs/testHelpers';

import TagsList from './TagsList';

describe('<TagsList />', () => {
  it('renders properly', () => {
    const { container } = render(<TagsList items={[]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
