import './Lesson_5.styles.scss'

import { Box, Heading } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { User, UserSchema } from '@/types'

interface Lesson_5Props extends HTMLAttributes<HTMLDivElement> {}

export const Lesson_5: FC<Lesson_5Props> = ({ className, ...props }) => {
  const user: User = {
    username: 'John Doe',
    age: 20,
    birthday: new Date(),
    isProgrammer: true,
    hobbies: 'coding',
  }

  // const userCheck = UserSchema.parse(user)
  const userCheck = UserSchema.safeParse(user)

  const renderUser = () => {
    if (userCheck.success) {
      return (
        <div>
          <h2>{userCheck.data.username}</h2>
          <p>Age: {userCheck.data.age}</p>
          <p>Is programmer: {userCheck.data.isProgrammer ? 'Yes' : 'No'}</p>
          <p>Hobbies: {userCheck.data.hobbies}</p>
        </div>
      )
    }

    return <p>Invalid user</p>
  }

  return (
    <Box className={clsx('lesson-5', className)} padding="15px" {...props}>
      <Heading size="md" mb="15px">
        Zod Basic
      </Heading>
      {renderUser()}
    </Box>
  )
}
