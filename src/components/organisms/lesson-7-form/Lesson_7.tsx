import './Lesson_7.styles.scss'

import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import clsx from 'clsx'
import { FC } from 'react'
import { Form } from 'react-router-dom'

interface Lesson_7Props {}

export const Lesson_7: FC<Lesson_7Props> = ({ ...props }) => {
  return (
    <Form
      className={clsx('lesson-7')}
      method="POST"
      action="/create"
      {...props}
    >
      <FormControl mb="40px" isRequired>
        <FormLabel>Task name:</FormLabel>
        <Input name="title" type="text" />
        <FormHelperText>Enter a descriptive task name.</FormHelperText>
      </FormControl>

      <FormControl mb="40px">
        <FormLabel>Task description:</FormLabel>
        <Textarea
          name="description"
          placeholder="Enter a detailed description for the task..."
        />
      </FormControl>

      <FormControl mb="40px" display="flex" alignItems="center">
        <Checkbox name="isPriority" size="lg" colorScheme={'purple'} />
        <FormLabel ml="10px" mb="0">
          Make this a priority task.
        </FormLabel>
      </FormControl>

      <Button type="submit">Submit</Button>
    </Form>
  )
}
