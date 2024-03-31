import './Profile.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { Lesson_6 } from '@/components/organisms/lesson-6-tabs'

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {}

export const Profile: FC<ProfileProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('profile', className)} {...props}>
      <Lesson_6 />
    </div>
  )
}
