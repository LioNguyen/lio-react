import * as S from './styles.ts'

import { Box, BoxProps, Center, Heading } from '@chakra-ui/react'
import { FC } from 'react'

interface HoverEffectProps extends BoxProps {}

export const HoverEffect: FC<HoverEffectProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading as="h3" mb="15px">
        Hover Effect
      </Heading>
      <S.ContainerWrapper gap="5px" >
        {new Array(4).fill(null).map((_, i) => (
          <Center
            key={i}
            className="box"
            h="100px"
            w="100px"
            bgColor="brand.900"
            borderRadius="8px"
            color="white"
          >
            Hover
          </Center>
        ))}
      </S.ContainerWrapper>
    </Box>
  )
}
