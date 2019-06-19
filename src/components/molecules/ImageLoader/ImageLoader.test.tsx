import React from 'react';
import { waitForElement, fireEvent } from '@testing-library/react';

import { render } from 'libs/testHelpers';

import ImageLoader, { Props } from './ImageLoader';

const DESCRIPTION = 'Альтернативный текст';
const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';
const WIDTH = 640;
const HEIGHT = 480;
const NATURAL_WIDTH = 100;
const NATURAL_HEIGHT = 100;

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

    Object.defineProperty((global as any).Image.prototype, 'naturalWidth', {
      get() {
        return NATURAL_WIDTH;
      },
    });

    Object.defineProperty((global as any).Image.prototype, 'naturalHeight', {
      get() {
        return NATURAL_HEIGHT;
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
    it('показывает заглушку', () => {
      const { queryByText, queryByAltText } = renderComp();
      const altEl = queryByText(DESCRIPTION);
      const imgEl = queryByAltText(DESCRIPTION);

      expect(altEl).toBe(null);
      expect(imgEl).toBe(null);
    });
  });
});
