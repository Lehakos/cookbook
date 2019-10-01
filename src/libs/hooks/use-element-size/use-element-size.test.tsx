import { renderHook } from '@testing-library/react-hooks';

import { mockElementWithBoundingRect } from 'libs/test-helpers';

import { useElementSize } from './use-element-size';

describe('useElementSize', () => {
  describe('no element or it is not ready yet', () => {
    it('returns width and height equal 0', () => {
      const { result } = renderHook(() => useElementSize({ current: null }));
      expect(result.current.width).toBe(0);
      expect(result.current.height).toBe(0);
    });
  });

  describe('element is ready', () => {
    it('returns width and height of element', () => {
      const { result } = renderHook(() =>
        useElementSize({
          current: mockElementWithBoundingRect({ width: 100, height: 100 }),
        }),
      );
      expect(result.current.width).toBe(100);
      expect(result.current.height).toBe(100);
    });
  });
});
