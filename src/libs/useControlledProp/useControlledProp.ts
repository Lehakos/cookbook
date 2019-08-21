import { useState } from 'react';

type Handler<T> = (val: T) => void;

function useControlledProp<T>(
  initialValue: T,
  handler?: Handler<T>,
  value?: T,
): [T, Handler<T>] {
  const [state, setState] = useState(initialValue);

  if (value !== undefined) {
    return [value, handler as Handler<T>];
  }

  const uncontolledHandler = (val: T) => {
    if (handler) {
      handler(val);
    }

    setState(val);
  };

  return [state, uncontolledHandler];
}

export { useControlledProp };
