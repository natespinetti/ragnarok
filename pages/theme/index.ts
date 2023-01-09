// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import { colors } from './colors'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const overrides = {
  colors,
//   borders,
//   // Other foundational style overrides go here
//   components: {
//     Button,
//     // Other components go here
//   },
}

export default extendTheme(overrides);