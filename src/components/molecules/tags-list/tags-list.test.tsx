import React from 'react';

import { render } from 'libs/test-helpers';

import { TagsList } from './tags-list';

describe('<TagsList />', () => {
  it('renders properly', () => {
    const { container } = render(<TagsList items={[]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
