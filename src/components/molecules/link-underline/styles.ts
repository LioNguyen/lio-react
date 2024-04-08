import { HStack, chakra } from '@chakra-ui/react'

export const NavBar = chakra(HStack, {
  baseStyle: {
    a: {
      position: 'relative',
      color: 'brand.700',
      transition: 'all .4s',
      '&::after': {
        content: "''",
        background: 'brand.900',
        height: '2px',
        width: 0,
        transition: 'all .4s ease-in-out',

        position: 'absolute',
        bottom: -2,
        left: 0,
      },
      '&:hover': {
        color: 'brand.900',
        textDecoration: 'none',
        '&::after': {
          width: '100%',
        },
      },
    },
  },
})
