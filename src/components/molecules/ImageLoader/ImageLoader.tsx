import React, { useReducer, useEffect } from 'react';

import ImagePlaceholder, {
  Props as ImagePlaceholderProps,
} from 'components/atoms/ImagePlaceholder';
import { StrictUnion } from 'shared/types';

import * as s from './ImageLoader.styles';

type Size = {
  width: number;
  height: number;
};

export type Props = {
  src: string;
  alt: string;
} & ImagePlaceholderProps;

interface State {
  error: boolean;
  loaded: boolean;
  computedSize: StrictUnion<Size | {}>;
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

const ImageLoader: React.FunctionComponent<Props> = function({
  src,
  alt,
  width,
  height,
  responsive,
}) {
  const initialState: State = {
    loaded: false,
    error: false,
    computedSize:
      typeof width === 'number' && typeof height === 'number'
        ? { width, height }
        : {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadImage = () => {
    const currentSrc = src;
    dispatch({ type: 'loadImageStart' });

    const img = new Image();

    const loadHandler = () => {
      if (currentSrc !== src) {
        return;
      }

      const computedSize = {
        width: width || img.naturalWidth,
        height: height || img.naturalHeight,
      };

      dispatch({ type: 'loadImageSuccess', payload: computedSize });
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

  const { loaded, error, computedSize } = state;
  const showImage = !error && loaded;

  return (
    <ImagePlaceholder {...computedSize} responsive={responsive}>
      {error && (
        <div>
          Fail to load image. Here is a text description:
          <p>{alt}</p>
        </div>
      )}
      {showImage && <s.Img src={src} alt={alt} />}
    </ImagePlaceholder>
  );
};

export default ImageLoader;
