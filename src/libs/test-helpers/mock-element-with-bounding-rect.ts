export const mockElementWithBoundingRect = ({
  width = 100,
  height = 100,
  top = 0,
  left = 0,
}) => {
  const right = left + width;
  const bottom = top + height;

  Object.defineProperties(Element.prototype, {
    offsetLeft: {
      get() {
        return left;
      },
      configurable: true,
    },
    offsetTop: {
      get() {
        return top;
      },
      configurable: true,
    },
    offsetHeight: {
      get() {
        return height;
      },
      configurable: true,
    },
    offsetWidth: {
      get() {
        return width;
      },
      configurable: true,
    },
  });

  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      width,
      height,
      top,
      left,
      bottom,
      right,
    };
  });

  const element = document.createElement('div');

  return element;
};
