import React from 'react';

import { render } from 'libs/testHelpers';

import BurgerBtn from './BurgerBtn';

describe('<BurgerBtn />', () => {
  it('правильно отображается', () => {
    const { container } = render(<BurgerBtn ariaControls="main-nav" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
