import React from 'react';

import { render } from 'libs/testHelpers';

import Icon from './Icon';

describe('<Icon />', () => {
  it('правильно отображается', () => {
    const { container } = render(<Icon icon="plus" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
