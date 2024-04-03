import './Lesson_4.styles.scss'

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
import { zodResolver } from '@hookform/resolvers/zod'

import { UserFormFields, userFormSchema } from '@/types'

interface Lesson_4Props extends FormHTMLAttributes<HTMLFormElement> {}

/**
 * Advance form state: formState: { isSubmitting },
 * Advance method: setError
 */
export const Lesson_4: FC<Lesson_4Props> = ({ className, ...props }) => {
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
    resolver: zodResolver(userFormSchema),
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
        <Input type="text" placeholder="Email" {...register('email')} />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Password input */}
      <FormControl mb="15px" isInvalid={!!errors?.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
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
