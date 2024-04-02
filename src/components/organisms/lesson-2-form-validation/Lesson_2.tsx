import './Lesson_2.styles.scss'

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, FormHTMLAttributes } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { UserFormFields } from '@/types'

interface Lesson_2Props extends FormHTMLAttributes<HTMLFormElement> {}

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFields>()

  console.log('errors', errors)

  const onSubmit: SubmitHandler<UserFormFields> = (data) => {
    console.log({ data })
  }

  return (
    <Box
      className={clsx('lesson-2', className)}
      as="form"
      padding="15px"
      width="500px"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      {/* Email input */}
      <FormControl mb="15px" isInvalid={!!errors?.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,

            // Another way to validate
            validate: (value) => {
              if (!value.includes('@')) {
                return 'Email must include @'
              }

              return true
            },
          })}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Password input */}
      <FormControl mb="15px" isInvalid={!!errors?.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit">Submit</Button>
    </Box>
  )
}
