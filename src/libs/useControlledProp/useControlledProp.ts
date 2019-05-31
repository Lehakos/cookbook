import { useState } from 'react';

type Handler<T> = (val: T) => void;

function useControlledProp<T>(initialValue: T, value?: T, handler?: Handler<T>): [T, Handler<T>] {
  const [state, setState] = useState(initialValue);

  if (value !== undefined) {
    return [value, (handler as Handler<T>)];
  }

  return [state, setState];
}

export { useControlledProp };
