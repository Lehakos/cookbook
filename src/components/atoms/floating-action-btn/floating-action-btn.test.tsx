import React from 'react';

import { render } from 'libs/test-helpers';

import { FloatingActionBtn } from './floating-action-btn';

describe('<FloatingActionBtn />', () => {
  it('renders properly', () => {
    const { container } = render(
      <FloatingActionBtn ariaLabel="Plus">+</FloatingActionBtn>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
