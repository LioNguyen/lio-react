import './Axios.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface AxiosProps extends HTMLAttributes<HTMLDivElement> {}

export const Axios: FC<AxiosProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('axios', className)} {...props}>
      <h1>Axios</h1>
      {children}
    </div>
  )
}
