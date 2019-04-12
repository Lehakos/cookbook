// import original module declarations
import 'styled-components';

import { Theme } from './shared/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}
