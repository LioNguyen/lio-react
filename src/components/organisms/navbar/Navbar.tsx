import './Navbar.styles.scss'

import { FC, HTMLAttributes } from 'react'
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <>
      {/* <Lesson_2 /> */}
      <Flex p="10px" alignItems="center">
        <Heading as="h1">Dojo Task</Heading>
        <Spacer />

        <HStack spacing="20px">
          <Box bg="gray.200" p="10px">
            M
          </Box>
          <Text>lio.dev@gmail.com</Text>
          <Button colorScheme="purple">Logout</Button>
        </HStack>
      </Flex>
    </>
  )
}
