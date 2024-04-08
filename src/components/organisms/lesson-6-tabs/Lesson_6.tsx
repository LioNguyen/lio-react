import './Lesson_6.styles'

import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from '@chakra-ui/icons'
import { Box, BoxProps, List, ListIcon, ListItem } from '@chakra-ui/react'
import { FC } from 'react'

import { CustomTabs, Tab } from '@/components/molecules/custom-tabs'

interface Lesson_6Props extends BoxProps {
  className?: string
}

export const Lesson_6: FC<Lesson_6Props> = ({ ...props }) => {
  const tabList: Tab[] = [
    {
      title: 'Account Info',
      content: (
        <List spacing={4}>
          <ListItem>
            <ListIcon as={EmailIcon} />
            Email: mario@netninja.dev
          </ListItem>
          <ListItem>
            <ListIcon as={ChatIcon} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
        </List>
      ),
    },
    {
      title: 'Task History',
      content: (
        <List spacing={4}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="red.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="red.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
        </List>
      ),
    },
  ]
  return (
    <Box {...props}>
      <CustomTabs
        tabList={tabList}
        tabProps={{
          _selected: { bg: 'purple.400', color: 'white' },
        }}
        mt="40px"
        p="20px"
        colorScheme="purple"
        variant={'enclosed'}
      />
    </Box>
  )
}
