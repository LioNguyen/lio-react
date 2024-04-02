import './Lesson_5.styles.scss'

import { TaskType } from '@/types'
import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface Lesson_5Props extends HTMLAttributes<HTMLDivElement> {
  task: TaskType
}

export const Lesson_5: FC<Lesson_5Props> = ({ className, task, ...props }) => {
  return (
    <Card
      className={clsx('lesson-5', className)}
      borderTop="8px"
      borderColor="purple.400"
      bg="white"
      {...props}
    >
      <CardHeader>
        <Flex>
          <Box w="50px" h="50px">
            <Text>AV</Text>
          </Box>
          <Box>
            <Heading as="h3" size="sm">
              {task.title}
            </Heading>
            <Text>by {task.author}</Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody color="gray.500">
        <Text>{task.description}</Text>
      </CardBody>

      <Divider borderColor={'gray.200'} />

      <CardFooter>
        <HStack>
          <Button leftIcon={<ViewIcon />}>Watch</Button>
          <Button leftIcon={<EditIcon />}>Comment</Button>
        </HStack>
      </CardFooter>
    </Card>
  )
}
