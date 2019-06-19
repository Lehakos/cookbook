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
  it('правильно отображается', () => {
    const { container } = render(<ImagePlaceholder />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('если переданы пропсы width и height', () => {
    it('показывает заглушку с этими размерами', () => {
      const { queryByText } = renderComp();
      expect(queryByText(`${WIDTH} x ${HEIGHT}`)).toBeTruthy();
    });
  });

  describe('если не переданы пропсы width и height', () => {
    it('показывает заглушку с дефолтными размерами', () => {
      const { queryByText } = renderComp({
        width: undefined,
        height: undefined,
      });
      expect(queryByText(`${DEFAULT_WIDTH} x ${DEFAULT_HEIGHT}`)).toBeTruthy();
    });
  });
});
