import { Flex, chakra } from '@chakra-ui/react'

export const ContainerWrapper = chakra(Flex, {
  baseStyle: {
    cursor: 'pointer',
    margin: '15px 0',
    width: 'fit-content',
    '.box': {
      transition: 'all 0.4s ease',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    // Apply styles to the .box when its parent is hovered and it is not hovered
    '&:hover > .box:not(:hover)': {
      filter: 'blur(5px)',
      transform: 'scale(0.9)',
    },
  },
})
