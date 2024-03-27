import './Dashboard.styles.scss'

import { FC, HTMLAttributes } from 'react'

import { Lesson_3 } from '@/components/organisms/lesson-3-grid-layouts'

interface DashboardProps extends HTMLAttributes<HTMLDivElement> {}

export const Dashboard: FC<DashboardProps> = () => {
  return (
    <>
      {/* <Lesson_1 /> */}
      <Lesson_3 />
    </>
  )
}
