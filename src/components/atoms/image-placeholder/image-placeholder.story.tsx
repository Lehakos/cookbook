import React from 'react';
import { storiesOf } from '@storybook/react';

import { ImagePlaceholder } from './image-placeholder';

const stories = storiesOf('Atoms|ImagePlaceholder', module).addParameters({
  component: ImagePlaceholder,
});

stories.add('Default', () => <ImagePlaceholder />);
