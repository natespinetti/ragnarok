// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import { colors } from './colors'
import { fonts } from './fonts'
import { breakpoints } from './breakpoints'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const overrides = {
  colors,
  fonts,
  breakpoints,
//   borders,
//   // Other foundational style overrides go here
//   components: {
//     Button,
//     // Other components go here
//   },
}

export const theme =  extendTheme(overrides);
export default overrides;