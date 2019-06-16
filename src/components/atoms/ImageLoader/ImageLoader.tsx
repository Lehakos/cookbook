import React, { useRef, useReducer, useEffect } from 'react';

import { StrictUnion } from 'shared/types';

import * as s from './ImageLoader.styles';

interface Size {
  width: number;
  height: number;
}

type Props = {
  src: string;
  alt: string;
  responsive?: boolean;
} & StrictUnion<Size | {}>;

interface State {
  error: boolean;
  loaded: boolean;
  computedSize: Size;
}

type LoadImageStartAction = { type: 'loadImageStart' };
type LoadImageSuccessAction = { type: 'loadImageSuccess'; payload: Size };
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
        computedSize: action.payload,
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

const DEFAULT_WIDTH = 480;
const DEFAULT_HEIGHT = 360;

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
    computedSize: {
      width: width || DEFAULT_WIDTH,
      height: height || DEFAULT_HEIGHT,
    },
  };
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadImage = () => {
    const currentSrc = src;
    dispatch({ type: 'loadImageStart' });

    const img = new Image();

    img.addEventListener('load', () => {
      if (currentSrc !== src) {
        return;
      }
      const computedSize = {
        width: width || img.naturalWidth,
        height: height || img.naturalHeight,
      };
      dispatch({ type: 'loadImageSuccess', payload: computedSize });
    });

    img.addEventListener('error', e => {
      if (currentSrc !== src) {
        return;
      }
      console.error(e.error); // eslint-disable-line
      dispatch({ type: 'loadImageFail' });
    });

    img.src = src;
  };

  useEffect(() => {
    loadImage();
  }, [src]);

  const { loaded, error, computedSize } = state;
  const showImageSize = !error && !loaded;
  const showImage = !error && loaded;

  const getWidth = () => {
    if (responsive) return '100%';
    return `${computedSize.width}px`;
  };

  const getHeight = () => {
    if (!responsive || !loaded) return `${computedSize.height}px`;
    return 'auto';
  };

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
          {computedSize.width} x {computedSize.height}
        </s.Size>
      )}
    </s.Wrapper>
  );
};

export default ImageLoader;
