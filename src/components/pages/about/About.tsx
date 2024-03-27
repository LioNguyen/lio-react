import './About.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export const About: FC<AboutProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('about', className)} {...props}>
      <h1>About</h1>
      {children}
    </div>
  )
}
