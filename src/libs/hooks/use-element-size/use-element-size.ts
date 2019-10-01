import { useState, useEffect } from 'react';

export const useElementSize = (ref: { current: null | HTMLElement }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    if (width === size.width && height === size.height) return;

    setSize({ width, height });
  });

  return size;
};
