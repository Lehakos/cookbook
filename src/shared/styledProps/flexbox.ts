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

export const flexbox = compose({
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
});

export type FlexboxProps = AlignItemsProps &
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
