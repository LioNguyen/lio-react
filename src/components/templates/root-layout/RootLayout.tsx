import './RootLayout.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const RootLayout: FC<RootLayoutProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx('root-layout', className)} {...props}>
      <Outlet />
    </div>
  )
}
