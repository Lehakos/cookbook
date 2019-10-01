import { renderHook, act } from '@testing-library/react-hooks';

import { useControlledProp } from './use-controlled-prop';

describe('useControlledProp', () => {
  describe('value is not provided', () => {
    it('returns state equal initialState', () => {
      const { result } = renderHook(() => useControlledProp(10));
      expect(result.current[0]).toBe(10);
    });

    it('returns function, which can change state', () => {
      const { result } = renderHook(() => useControlledProp(10));

      act(() => {
        result.current[1](11);
      });

      expect(result.current[0]).toBe(11);
    });

    it('calls user handler, if provided', () => {
      const handler = jest.fn();
      const { result } = renderHook(() =>
        useControlledProp<number>(10, handler),
      );

      act(() => {
        result.current[1](11);
      });

      expect(handler).toBeCalledWith(11);
    });
  });

  describe('value is provided', () => {
    it('returns state equal value', () => {
      const { result } = renderHook(() => useControlledProp(10, jest.fn(), 20));
      expect(result.current[0]).toBe(20);
    });

    it("returns user's handler as setState", () => {
      const handler = jest.fn();
      const { result } = renderHook(() => useControlledProp(10, handler, 20));
      expect(result.current[1]).toBe(handler);
    });
  });
});
