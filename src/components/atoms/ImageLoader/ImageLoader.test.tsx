import React from 'react';
import { waitForElement, fireEvent } from '@testing-library/react';

import { render } from 'libs/testHelpers';

import ImageLoader, {
  Props,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
} from './ImageLoader';

const DESCRIPTION = 'Альтернативный текст';
const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';
const WIDTH = 640;
const HEIGHT = 480;

const renderComp = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    width: WIDTH,
    height: HEIGHT,
    alt: DESCRIPTION,
    src: LOAD_SUCCESS_SRC,
  };

  return render(<ImageLoader {...defaultProps} {...props} />);
};

describe('<ImageLoader />', () => {
  beforeAll(() => {
    Object.defineProperty((global as any).Image.prototype, 'src', {
      set(src) {
        if (src === LOAD_FAILURE_SRC) {
          setTimeout(() =>
            fireEvent(
              this,
              new ErrorEvent('error', { error: new Error('some error') }),
            ),
          );
        } else if (src === LOAD_SUCCESS_SRC) {
          setTimeout(() => fireEvent(this, new Event('load')));
        }
      },
    });
  });

  it('правильно отображается', () => {
    const { container } = renderComp();
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('если картинка успешно загрузилась', () => {
    it('показывает картинку', async () => {
      const { queryByAltText } = renderComp();
      const el = await waitForElement(() => queryByAltText(DESCRIPTION));

      expect(el).toBeTruthy();
    });
  });

  describe('если не удалось загрузить картинку', () => {
    it('показывает альтернативный текст', async () => {
      const { queryByText } = renderComp({
        src: LOAD_FAILURE_SRC,
      });
      const el = await waitForElement(() => queryByText(DESCRIPTION));

      expect(el).toBeTruthy();
    });
  });

  describe('если картинка грузится', () => {
    describe('и переданы пропсы width и height', () => {
      it('показывает заглушку с этими размерами', () => {
        const { queryByText } = renderComp();
        expect(queryByText(`${WIDTH} x ${HEIGHT}`)).toBeTruthy();
      });
    });

    describe('и не переданы пропсы width и height', () => {
      it('показывает заглушку с дефолтными размерами', () => {
        const { queryByText } = renderComp({
          width: undefined,
          height: undefined,
        });
        expect(
          queryByText(`${DEFAULT_WIDTH} x ${DEFAULT_HEIGHT}`),
        ).toBeTruthy();
      });
    });
  });
});
