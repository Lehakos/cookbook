// import original module declarations
import 'styled-components';

import { Theme } from './libs/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}
