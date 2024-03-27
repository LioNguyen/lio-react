import {
  Box,
  Container,
  Heading,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react'
import './Lesson_1.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface Lesson_1Props extends HTMLAttributes<HTMLDivElement> {}

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {
  const boxStyles: SystemStyleObject = {
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    p: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    },
  }

  return (
    <Container
      className={clsx('lesson-1', className)}
      as="section"
      maxW="4xl"
      py="20px"
      {...props}
    >
      {/* Default heading is h2 */}
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text ml="30px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum
        hic quaerat nesciunt inventore repellendus voluptatem, sit iure pariatur
        placeat sequi, nulla labore debitis neque minima, fugit veniam
        asperiores sapiente tempora est officia?
      </Text>
      <Text color="blue.300" ml="30px" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum
        hic quaerat nesciunt inventore repellendus voluptatem, sit iure pariatur
        placeat sequi, nulla labore debitis neque minima, fugit veniam
        asperiores sapiente tempora est officia?
      </Text>

      <Box bg="orange" my="30px" p="20px">
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={boxStyles}>Hello, Lio!</Box>
    </Container>
  )
}
