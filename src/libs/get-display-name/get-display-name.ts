import { ComponentType } from 'react';

export const getDisplayName = (WrappedComponent: ComponentType<any>) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
