import './UserCard.styles.scss'

import { Card, CardBody, Text } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface UserCardProps extends HTMLAttributes<HTMLDivElement> {
  username: string
  email: string
}

export const UserCard: FC<UserCardProps> = ({
  className,
  email,
  username,
  ...props
}) => {
  return (
    <Card className={clsx('user-card', className)} {...props}>
      <CardBody>
        <Text>{username}</Text>
        <Text>{email}</Text>
      </CardBody>
    </Card>
  )
}
