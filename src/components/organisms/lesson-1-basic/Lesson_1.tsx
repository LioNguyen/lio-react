import './Lesson_1.styles.scss'

import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, FormHTMLAttributes } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { UserFormFields } from '@/types'

interface Lesson_1Props extends FormHTMLAttributes<HTMLFormElement> {}

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {
  const { register, handleSubmit } = useForm<UserFormFields>()

  const onSubmit: SubmitHandler<UserFormFields> = (data) => {
    console.log({ data })
  }

  return (
    <Box
      className={clsx('lesson-1', className)}
      as="form"
      padding="15px"
      width="500px"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      {/* Email input */}
      <FormControl mb="15px">
        <FormLabel>Email</FormLabel>
        <Input type="text" placeholder="Email" {...register('email')} />
      </FormControl>

      {/* Password input */}
      <FormControl mb="15px">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </Box>
  )
}
