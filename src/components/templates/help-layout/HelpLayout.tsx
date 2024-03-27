import './HelpLayout.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

interface HelpLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const HelpLayout: FC<HelpLayoutProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('help-layout', className)} {...props}>
      <h2>Website Help</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
        amet?
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
