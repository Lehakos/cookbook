import React from 'react';

import { render } from 'libs/testHelpers';

import ImageLoader from './ImageLoader';

describe('<ImageLoader />', () => {
  it('правильно отображается', () => {
    const { container } = render(
      <ImageLoader
        width={640}
        height={480}
        alt="nature"
        src="https://placeimg.com/640/480/nature"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
