import * as S from './styles.ts'

import { Box, BoxProps, Heading, Link } from '@chakra-ui/react'
import { FC } from 'react'

interface LinkUnderlineProps extends BoxProps {}

export const LinkUnderline: FC<LinkUnderlineProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading as="h3" mb="15px">
        CSS Pseudo-elements
      </Heading>
      <S.NavBar gap="15px">
        <Link>Link Item 1</Link>
        <Link>Link Item 2</Link>
        <Link>Link Item 3</Link>
      </S.NavBar>
    </Box>
  )
}
