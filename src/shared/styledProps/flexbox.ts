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

export type FlexboxProps < T > = HTMLAttributes<T> &
AlignItemsProps &
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
