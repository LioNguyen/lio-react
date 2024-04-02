import './Lesson_3.styles.scss'

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

interface Lesson_3Props extends FormHTMLAttributes<HTMLFormElement> {}

/**
 * Advance form state: formState: { isSubmitting },
 * Advance method: setError
 */
export const Lesson_3: FC<Lesson_3Props> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserFormFields>({
    defaultValues: {
      email: 'test@co.co',
      password: '55555555',
    },
  })

  const onSubmit: SubmitHandler<UserFormFields> = async (data) => {
    try {
      const res = await new Promise((resolve) =>
        setTimeout(() => resolve(data), 2000),
      )

      console.log({ res })

      throw new Error()
    } catch (error) {
      setError('email', {
        message: 'Email already exists',
      })
      setError('root', {
        message: 'Something went wrong',
      })
    }
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
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </Button>

      <FormControl isInvalid={!!errors?.root}>
        <FormErrorMessage>{errors?.root?.message}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
