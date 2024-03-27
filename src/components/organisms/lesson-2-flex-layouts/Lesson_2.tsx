import './Lesson_2.styles.scss'

import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface Lesson_2Props extends HTMLAttributes<HTMLDivElement> {}

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  return (
    <Flex
      className={clsx('lesson-2', className)}
      bg="gray.200"
      justify="space-between"
      alignItems="center"
      gap="2"
      wrap="wrap"
      {...props}
    >
      <Box width="150px" height="50px" bg="red">
        1
      </Box>
      <Box width="150px" height="50px" bg="blue">
        2
      </Box>

      {/* Create space between element */}
      <Spacer />

      <Box width="150px" height="50px" bg="green" flexGrow="1">
        3
      </Box>
      <Button colorScheme="red">Sign out</Button>
    </Flex>
  )
}
