import { HTMLAttributes } from 'react';
import {
  compose,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis,
  AlignItemsProps,
  JustifyContentProps,
  FlexWrapProps,
  FlexDirectionProps,
  FlexProps,
  AlignContentProps,
  JustifyItemsProps,
  JustifySelfProps,
  AlignSelfProps,
  OrderProps,
  FlexBasisProps,
} from 'styled-system';

export const flexbox = compose(
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis,
);

type BaseFlexboxProps = AlignItemsProps &
JustifyContentProps &
FlexWrapProps &
FlexDirectionProps &
FlexProps &
AlignContentProps &
JustifyItemsProps &
JustifySelfProps &
AlignSelfProps &
OrderProps &
FlexBasisProps;

export type FlexboxPropsWithAttrs < T > = HTMLAttributes<T> & BaseFlexboxProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FlexboxProps = BaseFlexboxProps & { [prop: string]: any };
