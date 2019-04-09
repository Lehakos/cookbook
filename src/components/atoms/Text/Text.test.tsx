import React from 'react';
import { render } from 'react-testing-library';

import Text from './Text';

describe('<Text />', () => {
  it('правильно отображается', () => {
    const { container } = render(<Text />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
