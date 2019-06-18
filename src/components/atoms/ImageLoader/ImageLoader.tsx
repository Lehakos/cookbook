import React, { useRef, useReducer, useEffect } from 'react';

import { StrictUnion } from 'shared/types';

import * as s from './ImageLoader.styles';

interface Size {
  width: number;
  height: number;
}

export type Props = {
  src: string;
  alt: string;
  responsive?: boolean;
} & StrictUnion<Size | {}>;

interface State {
  error: boolean;
  loaded: boolean;
}

type LoadImageStartAction = { type: 'loadImageStart' };
type LoadImageSuccessAction = { type: 'loadImageSuccess' };
type LoadImageFailAction = { type: 'loadImageFail' };

const reducer = (
  state: State,
  action: LoadImageStartAction | LoadImageSuccessAction | LoadImageFailAction,
) => {
  switch (action.type) {
    case 'loadImageStart':
      return {
        ...state,
        loaded: false,
        error: false,
      };

    case 'loadImageSuccess':
      return {
        ...state,
        loaded: true,
      };

    case 'loadImageFail':
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export const DEFAULT_WIDTH = 480;
export const DEFAULT_HEIGHT = 360;

const ImageLoader: React.FunctionComponent<Props> = function({
  width,
  height,
  src,
  alt,
  responsive,
}) {
  const initialState: State = {
    loaded: false,
    error: false,
  };
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadImage = () => {
    const currentSrc = src;
    dispatch({ type: 'loadImageStart' });

    const img = new Image();

    const loadHandler = () => {
      if (currentSrc !== src) {
        return;
      }

      dispatch({ type: 'loadImageSuccess' });
    };

    const errorHandler = (e: ErrorEvent) => {
      if (currentSrc !== src) {
        return;
      }
      if (process.env.NODE_ENV !== 'test') {
        console.error(e.error); // eslint-disable-line
      }
      dispatch({ type: 'loadImageFail' });
    };

    img.addEventListener('load', loadHandler);
    img.addEventListener('error', errorHandler);

    img.src = src;

    return () => {
      img.removeEventListener('load', loadHandler);
      img.removeEventListener('error', errorHandler);
    };
  };

  useEffect(() => {
    return loadImage();
  }, [src]);

  const { loaded, error } = state;
  const computedWidth = width || DEFAULT_WIDTH;
  const computedHeight = height || DEFAULT_HEIGHT;

  const getWidth = () => {
    if (responsive) return '100%';
    return `${computedWidth}px`;
  };

  const getHeight = () => {
    if (!responsive || !loaded) return `${computedHeight}px`;
    return 'auto';
  };

  const showImageSize = !error && !loaded;
  const showImage = !error && loaded;

  return (
    <s.Wrapper ref={wrapperRef} width={getWidth()} height={getHeight()}>
      {error && (
        <div>
          Fail to load image. Here is a text description:
          <p>{alt}</p>
        </div>
      )}
      {showImage && <s.Img src={src} alt={alt} />}
      {showImageSize && (
        <s.Size aria-hidden>
          {computedWidth} x {computedHeight}
        </s.Size>
      )}
    </s.Wrapper>
  );
};

export default ImageLoader;
