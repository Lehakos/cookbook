import React, {
  useState, useRef, forwardRef, ComponentType,
} from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import { StrictUnion } from 'shared/types';
import getDisplayName from 'shared/getDisplayName';

const propNameToPascalCase = (prop: string) => prop[0].toUpperCase() + prop.slice(1);

interface ControlledPropsMap {
  [prop: string]: any;
}

interface UpdateHandlersMap {
  [handlerName: string]: Function;
}

interface InitialValuesMap {
  [initialValueName: string]: any;
}

// eslint-disable-next-line arrow-parens
const withControlledProps = <
  C extends ControlledPropsMap,
  U extends UpdateHandlersMap,
  I extends InitialValuesMap,
  Props extends { [prop: string]: any },
>(
  controlledPropsMap: ControlledPropsMap,
) => {
  type InjectedProps = C & U;

  return (WrappedComponent: ComponentType<C & U & Props>) => {
    if (!WrappedComponent) {
      throw new Error('Вы должны передать компонент');
    }

    type WrapperProps = Props & Partial<I> & StrictUnion<InjectedProps | {}>;

    const WithControlledProps = forwardRef<typeof WrappedComponent, WrapperProps>((props, ref) => {
      const isConnected = (prop: string): boolean => props[prop] !== undefined;

      const initialState = Object.entries(controlledPropsMap).reduce<ControlledPropsMap>(
        (acc, [prop, defaultValue]) => {
          if (!isConnected(prop)) {
            const initialValueName = `initial${propNameToPascalCase(prop)}`;
            const initialValue = props[initialValueName] || defaultValue;
            acc[prop] = initialValue;
          }
          return acc;
        },
        {},
      );

      const [state, setState] = useState(initialState);

      const changePropValue = (prop: string, newValue: any) => {
        setState({ ...state, [prop]: newValue });
      };

      const updateHandlers = useRef<UpdateHandlersMap>({});

      const getUpdateHandlers = () => {
        const propNames = Object.keys(controlledPropsMap);
        const handlers: UpdateHandlersMap = {};

        propNames.forEach((prop) => {
          const handlerName = `onUpdate${propNameToPascalCase(prop)}`;

          if (isConnected(prop)) {
            handlers[handlerName] = props[handlerName] || function () {};
          } else {
            if (!updateHandlers.current[handlerName]) {
              updateHandlers.current[handlerName] = (value: any) => {
                changePropValue(prop, value);

                if (props[handlerName]) {
                  props[handlerName](value);
                }
              };
            }

            handlers[handlerName] = updateHandlers.current[handlerName];
          }
        });

        return handlers;
      };

      const computedProps = {
        ...props,
        ...state,
        ...getUpdateHandlers(),
      };

      return <WrappedComponent {...(computedProps as C & U & Props)} ref={ref} />;
    });

    WithControlledProps.displayName = `WithControlledProps(${getDisplayName(WrappedComponent)})`;

    hoistNonReactStatic(WithControlledProps, WrappedComponent);

    return WithControlledProps;
  };
};

export default withControlledProps;
