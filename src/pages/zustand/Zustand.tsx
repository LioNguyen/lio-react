import './Zustand.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Box } from '@chakra-ui/react'

import { Counter } from '@/shared/components/organisms/counter'

interface ZustandProps extends HTMLAttributes<HTMLDivElement> {}

export const Zustand: FC<ZustandProps> = ({ className, ...props }) => {
  return (
    <Box className={clsx('zustand', className)} {...props}>
      <Counter />
    </Box>
  )
}
