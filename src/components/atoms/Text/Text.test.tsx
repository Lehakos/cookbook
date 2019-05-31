import React from 'react';

import { render } from 'libs/testHelpers';

import Text from './Text';

describe('<Text />', () => {
  it('правильно отображается', () => {
    const { container } = render(<Text />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
