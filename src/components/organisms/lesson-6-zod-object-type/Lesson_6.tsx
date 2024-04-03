import './Lesson_6.styles.scss'

import { Box, Heading } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { User, UserSchema, UserSchemaInitial, UserSchemaPartial } from '@/types'

interface Lesson_6Props extends HTMLAttributes<HTMLDivElement> {}

/**
 * shape is a property that contains all the properties of the schema
 */
export const Lesson_6: FC<Lesson_6Props> = ({ className, ...props }) => {
  const user: User = {
    id: '1',
    username: 'John Doe',
    age: 20,
    birthday: new Date(),
    isProgrammer: true,
    hobbies: 'coding',
  }

  // const userCheck = UserSchema.parse(user)
  const userCheck = UserSchema.safeParse(user)

  // console.log(UserSchema.shape.age)

  const newUser = {
    username: 'Jane Doe',
  }
  console.log('newUser check', UserSchemaPartial.safeParse(newUser))

  const userA = {
    fullName: 'John Doe',
    age: 20,
    isProgrammer: true,
  }
  console.log('userA check', UserSchemaInitial.safeParse(userA))

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
    <Box className={clsx('lesson-6', className)} padding="15px" {...props}>
      <Heading size="md" mb="15px">
        Zod Object Type
      </Heading>
      {renderUser()}
    </Box>
  )
}
