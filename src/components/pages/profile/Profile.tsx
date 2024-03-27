import './Profile.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {}

export const Profile: FC<ProfileProps> = ({ className, children, ...props }) => {
  return (
    <div className={clsx('profile', className)} {...props}>
      <h1>Profile</h1>
      {children}
    </div>
  )
}
