import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from './card';

const stories = storiesOf('Atoms|Card', module);

stories.add('Default', () => (
  <Card>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
    accusantium dolore ab dolorem totam, molestiae veniam possimus officia, esse
    velit similique sed amet voluptatem. Doloremque fugiat dolorum quidem libero
    odio?
  </Card>
));
