import { extendTheme } from '@chakra-ui/react'
import { colors, fonts, styles } from './styles'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
})

export default theme
