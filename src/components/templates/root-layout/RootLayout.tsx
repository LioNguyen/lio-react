import './RootLayout.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { Breadcrumbs } from '@/components/molecules/breadcrumbs'

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const RootLayout: FC<RootLayoutProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('root-layout', className)} {...props}>
      <header>
        <nav>
          <h1>Router</h1>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>

        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
