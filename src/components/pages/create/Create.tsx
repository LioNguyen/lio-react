import { Box } from '@chakra-ui/react'
import './Create.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Lesson_7 } from '@/components/organisms/lesson-7-form'

interface CreateProps extends HTMLAttributes<HTMLDivElement> {}

export const Create: FC<CreateProps> = ({ className, ...props }) => {
  return (
    <Box className={clsx('create', className)} maxW="480px" {...props}>
      <Lesson_7 />
    </Box>
  )
}
