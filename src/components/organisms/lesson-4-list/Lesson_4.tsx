import { AtSignIcon, CalendarIcon, EditIcon, InfoIcon } from '@chakra-ui/icons'
import './Lesson_4.styles.scss'

import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Lesson_4Props {}

export const Lesson_4: FC<Lesson_4Props> = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon} color="white" />
          New task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/table">
          <ListIcon as={InfoIcon} color="white" />
          Table
        </NavLink>
      </ListItem>
    </List>
  )
}
