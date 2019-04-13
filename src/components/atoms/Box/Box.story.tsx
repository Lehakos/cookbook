import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Box from './Box';

const stories = storiesOf('Atoms|Box', module);

stories.add('Default', () => (
  <Box
    display={select(
      'display',
      ['flex', 'inline-flex', 'table', 'inline-table', 'block', 'inline-block', 'inline'],
      'flex',
    )}
    border={0}
    p={select('padding', [0, 1, 2, 3, 4, 5, 6, 7], 0)}
    m={select('margin', [0, 1, 2, 3, 4, 5, 6, 7], 0)}
    width={select('width', ['100%', '50%', '48px', 'auto'], '100%')}
    height={select('height', ['auto', 0, 1, 2, 3, 4, 5, 6], 'auto')}
    alignItems={select('alignItems', ['flex-start', 'center', 'flex-end'], 'flex-start')}
    justifyContent={select('justifyContent', ['flex-start', 'center', 'flex-end'], 'flex-start')}
    flexDirection={
      select('flexDirection', ['row', 'row-reverse', 'column', 'column-reverse'], 'row') as
        | 'row'
        | 'row-reverse'
        | 'column'
        | 'column-reverse'
    }
  >
    Some text
  </Box>
));
