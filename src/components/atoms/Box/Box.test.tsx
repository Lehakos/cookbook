import React from 'react';

import { render } from 'libs/testHelpers';

import Box from './Box';

describe('<Box />', () => {
  it('правильно отображается', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
