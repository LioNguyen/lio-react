import './ReactQuery.styles.scss'

import { Box, Button } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'

import { GraphqlDemo } from '@/shared/components/organisms/graphql-demo'
import { Users } from '@/shared/components/organisms/users'

interface ReactQueryProps extends HTMLAttributes<HTMLDivElement> {}

export const ReactQuery: FC<ReactQueryProps> = ({ className, ...props }) => {
  const [showUser, setShowUser] = useState(true)

  return (
    <Box className={clsx('react-query', className)} {...props}>
      <Button onClick={() => setShowUser(!showUser)}>Show User</Button>
      {showUser && <Users />}
      <GraphqlDemo />
    </Box>
  )
}
