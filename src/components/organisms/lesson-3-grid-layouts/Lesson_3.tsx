import { Box, SimpleGrid } from '@chakra-ui/react'
import './Lesson_3.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Lesson_5 } from '../lesson-5-card'
import { TaskType } from '@/types'

interface Lesson_3Props extends HTMLAttributes<HTMLDivElement> {
  taskLists: TaskType[]
}

export const Lesson_3: FC<Lesson_3Props> = ({
  className,
  taskLists,
  ...props
}) => {
  return (
    <SimpleGrid
      className={clsx('lesson-3', className)}
      columns={4}
      spacing={10}
      minChildWidth={'250px'}
      {...props}
    >
      {/* <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>

      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>

      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box> */}

      {taskLists.map((task) => (
        <Lesson_5 key={task.id} task={task} />
      ))}
    </SimpleGrid>
  )
}
