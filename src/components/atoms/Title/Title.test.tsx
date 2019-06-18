import React from 'react';

import { render } from 'libs/testHelpers';

import Title from './Title';

describe('<Title />', () => {
  it('правильно отображается', () => {
    const { container } = render(<Title />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
