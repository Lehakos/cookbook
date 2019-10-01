import React from 'react';
import { waitForElement, fireEvent } from '@testing-library/react';

import { render } from 'libs/test-helpers';

import { ImageLoader, Props } from './image-loader';

const DESCRIPTION = 'Alternative text';
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
    Object.defineProperties((global as any).Image.prototype, {
      src: {
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
        configurable: true,
      },
      naturalWidth: {
        get() {
          return NATURAL_WIDTH;
        },
        configurable: true,
      },
      naturalHeight: {
        get() {
          return NATURAL_HEIGHT;
        },
        configurable: true,
      },
    });
  });

  it('renders properly', () => {
    const { container } = renderComp();
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('when image loaded successfully', () => {
    it('shows the image', async () => {
      const { queryByAltText } = renderComp();
      const el = await waitForElement(() => queryByAltText(DESCRIPTION));

      expect(el).toBeTruthy();
    });
  });

  describe('when image loading failed', () => {
    it('shows alternative text', async () => {
      const { queryByText } = renderComp({
        src: LOAD_FAILURE_SRC,
      });
      const el = await waitForElement(() => queryByText(DESCRIPTION));

      expect(el).toBeTruthy();
    });
  });

  describe('when image is loading', () => {
    it('shows placeholder', () => {
      const { queryByText, queryByAltText } = renderComp();
      const altEl = queryByText(DESCRIPTION);
      const imgEl = queryByAltText(DESCRIPTION);

      expect(altEl).toBe(null);
      expect(imgEl).toBe(null);
    });
  });
});
