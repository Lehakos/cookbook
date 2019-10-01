import React from 'react';
import { waitForElement } from '@testing-library/react';

import { render } from 'libs/test-helpers';

import { ImagePlaceholder, Props } from './image-placeholder';

const WIDTH = 640;
const HEIGHT = 480;

const renderComp = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    width: WIDTH,
    height: HEIGHT,
  };

  return render(<ImagePlaceholder {...defaultProps} {...props} />);
};

describe('<ImagePlaceholder />', () => {
  it('renders properly', () => {
    const { container } = renderComp();
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('when passed width и height', () => {
    beforeEach(() => {
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          width: WIDTH,
          height: HEIGHT,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        };
      });
    });

    it('shows placeholder with these sizes', async () => {
      const { queryByText } = renderComp();
      const el = await waitForElement(() =>
        queryByText(`${WIDTH} x ${HEIGHT}`),
      );

      expect(el).toBeTruthy();
    });
  });
});
