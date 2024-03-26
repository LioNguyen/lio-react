import './Users.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { Button, Heading } from '@chakra-ui/react'

import { UserCard } from '@/shared/components/molecules/user-card'
import { UserForm } from '@/shared/components/molecules/user-form'
import { useGetUsers } from '@/services/users'
import { useGlobalStore } from '@/store/globalStore'
import { UserType } from '@/types'

interface UsersProps extends HTMLAttributes<HTMLDivElement> {}

export const Users: FC<UsersProps> = ({ className, ...props }) => {
  const [getUser, setGetUser] = useState(false)
  const { data, isLoading } = useGetUsers({ enabled: getUser })

  const { showLoading, hideLoading } = useGlobalStore()

  useEffect(() => {
    if (isLoading) {
      return showLoading()
    } else {
      setTimeout(() => {
        hideLoading()
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <div className={clsx('users', className)} {...props}>
      <Heading as="h3">Users</Heading>
      <Button onClick={() => setGetUser(!getUser)}>Toggle User List</Button>
      <UserForm />
      {(data ?? []).map((user: UserType, index) => (
        <UserCard key={user.id} index={index} user={user} />
      ))}
    </div>
  )
}
