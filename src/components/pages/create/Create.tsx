import './Create.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface CreateProps extends HTMLAttributes<HTMLDivElement> {}

export const Create: FC<CreateProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('create', className)} {...props}>
      <h1>Create</h1>
      {children}
    </div>
  )
}
