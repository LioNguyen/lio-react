import './Error.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface ErrorProps extends HTMLAttributes<HTMLDivElement> {}

export const Error: FC<ErrorProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('error', className)} {...props}>
      <h1>Error</h1>
      {children}
    </div>
  )
}
