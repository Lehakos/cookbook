import React from 'react';
import { storiesOf } from '@storybook/react';

import BurgerBtn from './BurgerBtn';

const stories = storiesOf('Atoms|BurgerBtn', module);

stories.add('Default', () => <BurgerBtn ariaControls="main-nav" />);
