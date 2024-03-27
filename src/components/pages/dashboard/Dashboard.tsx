import './Dashboard.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface DashboardProps extends HTMLAttributes<HTMLDivElement> {}

export const Dashboard: FC<DashboardProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('dashboard', className)} {...props}>
      <h1>Dashboard</h1>
      {children}
    </div>
  )
}
