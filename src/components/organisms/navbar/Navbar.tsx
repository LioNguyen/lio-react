import './Navbar.styles.scss'

import { UnlockIcon } from '@chakra-ui/icons'
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react'
import { FC, HTMLAttributes } from 'react'

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
          <Avatar name="Mario" src="/img/mario.png">
            <AvatarBadge bg="teal" width="1.3em">
              <Text color="white" fontSize="xs">
                3
              </Text>
            </AvatarBadge>
          </Avatar>
          <Text>lio.dev@gmail.com</Text>
          <Button colorScheme="purple" onClick={showToast}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </>
  )
}
