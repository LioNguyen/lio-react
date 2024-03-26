import './Practice.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface PracticeProps extends HTMLAttributes<HTMLDivElement> {}

export const Practice: FC<PracticeProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('practice', className)} {...props}>
      <h1>Practice</h1>
      {children}
    </div>
  )
}
