import './UserCard.styles.scss'

import { CloseIcon } from '@chakra-ui/icons'
import { Card, CardBody, HStack, IconButton, Text } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { useDeleteUser } from '@/services/users'
import { UserType } from '@/types'

interface UserCardProps extends HTMLAttributes<HTMLDivElement> {
  index: number
  user: UserType
}

export const UserCard: FC<UserCardProps> = ({
  className,
  index,
  user,
  ...props
}) => {
  const deleteUser = useDeleteUser()

  const handleDeleteUser = () => {
    deleteUser.mutate(user.id)
  }

  return (
    <Card
      className={clsx('user-card', className)}
      margin={15}
      width={300}
      {...props}
    >
      <CardBody>
        <HStack>
          <Text>{index}</Text>
          <Text>{user.username}</Text>
          <IconButton
            aria-label="Delete user"
            icon={<CloseIcon />}
            onClick={handleDeleteUser}
          />
        </HStack>
      </CardBody>
    </Card>
  )
}
