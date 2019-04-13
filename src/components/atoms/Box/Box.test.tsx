import React from 'react';
import { render } from 'react-testing-library';

import Box from './Box';

describe('<Box />', () => {
  it('правильно отображается', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
