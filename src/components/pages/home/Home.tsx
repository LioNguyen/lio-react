import './Home.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface HomeProps extends HTMLAttributes<HTMLDivElement> {}

export const Home: FC<HomeProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('home', className)} {...props}>
      <h1>Home</h1>
      {children}
    </div>
  )
}
