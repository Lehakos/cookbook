import React from 'react';

import { render } from 'libs/testHelpers';

import FloatingActionBtn from './FloatingActionBtn';

describe('<FloatingActionBtn />', () => {
  it('правильно отображается', () => {
    const { container } = render(
      <FloatingActionBtn ariaLabel="Plus">+</FloatingActionBtn>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
