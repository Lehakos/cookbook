import React from 'react';

import { render } from 'libs/test-helpers';

import { BurgerBtn } from './burger-btn';

describe('<BurgerBtn />', () => {
  it('renders properly', () => {
    const { container } = render(<BurgerBtn ariaControls="main-nav" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
