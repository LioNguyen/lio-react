import './Users.styles.scss'

import { Text } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { UserCard } from '@/components/molecules/user-card'
import { UserForm } from '@/components/molecules/user-form'
import { useGetUsers } from '@/services/users'

interface UsersProps extends HTMLAttributes<HTMLDivElement> {}

export const Users: FC<UsersProps> = ({ className, ...props }) => {
  const { data, isLoading } = useGetUsers()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <div className={clsx('users', className)} {...props}>
      <h1>Users</h1>
      <UserForm />
      {(data ?? []).map((user: any) => (
        <UserCard key={user.id} email={user.email} username={user.username} />
      ))}
    </div>
  )
}
