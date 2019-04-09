// import original module declarations
import 'styled-components/macro';

import { Theme } from './shared/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}
