import { extendTheme } from '@chakra-ui/react'

import { config } from './config'
import { colors } from './colors'
import { fonts } from './fonts'
import { styles } from './styles'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { Icon } from './components/Icon'

const overrides = {
  config,
  colors,
  fonts,
  styles,
  components: {
    Button,
    Heading,
    Text,
    Icon,
  },
}

export const theme = extendTheme(overrides)
