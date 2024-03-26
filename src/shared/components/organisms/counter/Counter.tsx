import './Counter.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { useCounterStore } from '@/store/counterStore'
import { Button, Heading } from '@chakra-ui/react'

interface CounterProps extends HTMLAttributes<HTMLDivElement> {}

export const Counter: FC<CounterProps> = ({ className, ...props }) => {
  const { count, increaseCounter, decreaseCounter } = useCounterStore()
  return (
    <div className={clsx('counter', className)} {...props}>
      <Heading as="h3">Counter</Heading>
      {count}
      <Button onClick={decreaseCounter}>Decrease</Button>
      <Button onClick={increaseCounter}>Increase</Button>
    </div>
  )
}
