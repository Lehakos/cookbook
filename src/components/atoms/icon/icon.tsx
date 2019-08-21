import React, {
  useEffect,
  useReducer,
  Fragment,
  ComponentType,
  ReactElement,
} from 'react';
import { SizeProps } from 'styled-system';

import * as s from './icon.styles';

export const icons = ['plus'] as const;

type Props = {
  icon: typeof icons[number];
  /**
   * Shows this element while icon is loading
   * @default <Fragment>Loading...</Fragment>
   */
  fallback?: ReactElement;
  /**
   * Color of the icon
   * @default 'currentColor'
   */
  fill?: string;
} & SizeProps;

type State = {
  loading: boolean;
  IconComponent: ComponentType | null;
};

const initialState: State = { loading: false, IconComponent: null };

type LoadStartAction = { type: 'loadIconStart' };
type LoadSuccessAction = { type: 'loadIconSuccess'; payload: ComponentType };
type LoadFailAction = { type: 'loadIconFail' };

const reducer = (
  state: State,
  action: LoadStartAction | LoadSuccessAction | LoadFailAction,
) => {
  switch (action.type) {
    case 'loadIconStart':
      return {
        ...state,
        loading: true,
      };
    case 'loadIconSuccess':
      return {
        loading: false,
        IconComponent: action.payload,
      };
    case 'loadIconFail':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const Icon = ({
  icon,
  fallback = <Fragment>Loading...</Fragment>,
  fill = 'currentColor',
  size = 1,
  ...rest
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadIcon = async () => {
    dispatch({ type: 'loadIconStart' });

    try {
      const res = await import(
        /* webpackChunkName: "icon", webpackPrefetch: true */ `./svg/${icon}.svg`
      );

      if (res.ReactComponent) {
        dispatch({ type: 'loadIconSuccess', payload: res.ReactComponent });
      } else {
        throw new Error(`No icon with name ${icon}`);
      }
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      dispatch({ type: 'loadIconFail' });
    }
  };

  useEffect(() => {
    loadIcon();
  }, [icon]);

  const { loading, IconComponent } = state;

  if (loading) {
    return fallback;
  }

  if (!IconComponent) {
    return null;
  }

  return <s.Wrapper as={IconComponent} fill={fill} size={size} {...rest} />;
};

export default Icon;
