import { useCreateUser } from '@/services/users'
import './UserForm.styles.scss'

import { Button, FormControl, Input } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

interface UserFormProps extends HTMLAttributes<HTMLDivElement> {}

export const UserForm: FC<UserFormProps> = ({ className, ...props }) => {
  const { handleSubmit, register, reset } = useForm()
  const createUser = useCreateUser()

  const onSubmit = (values: FieldValues) => {
    const { username } = values

    createUser.mutate({ id: uuidv4(), username })
    reset()
  }

  return (
    <form className={clsx('form', className)} onSubmit={handleSubmit(onSubmit)}>
      <FormControl {...props}>
        <Input id="username" placeholder="username" {...register('username')} />
        <Button mt={4} colorScheme="teal" isLoading={false} type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  )
}
