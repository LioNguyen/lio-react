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
  useToast,
} from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = () => {
  const toast = useToast()

  const showToast = () => {
    toast({
      status: 'success',
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      position: 'bottom-right',
      icon: <UnlockIcon />,
    })
  }

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
          <Button colorScheme="purple" onClick={showToast}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </>
  )
}
