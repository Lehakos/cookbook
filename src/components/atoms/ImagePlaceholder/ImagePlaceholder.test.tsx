import React from 'react';

import { render } from 'libs/testHelpers';

import ImagePlaceholder, {
  Props,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
} from './ImagePlaceholder';

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
    const { container } = render(<ImagePlaceholder />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('when passed width и height', () => {
    it('shows placeholder with these sizes', () => {
      const { queryByText } = renderComp();
      expect(queryByText(`${WIDTH} x ${HEIGHT}`)).toBeTruthy();
    });
  });

  describe('when not passed width и height', () => {
    it('shows placeholder with default sizes', () => {
      const { queryByText } = renderComp({
        width: undefined,
        height: undefined,
      });
      expect(queryByText(`${DEFAULT_WIDTH} x ${DEFAULT_HEIGHT}`)).toBeTruthy();
    });
  });
});
