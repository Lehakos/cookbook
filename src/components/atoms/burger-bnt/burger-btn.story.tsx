import React from 'react';
import { storiesOf } from '@storybook/react';

import { BurgerBtn } from './burger-btn';

const stories = storiesOf('Atoms|BurgerBtn', module).addParameters({
  component: BurgerBtn,
});

stories.add('Default', () => <BurgerBtn ariaControls="main-nav" />);
