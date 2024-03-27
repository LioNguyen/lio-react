import './Dashboard.styles.scss'

import { Lesson_1 } from '@/components/organisms/lesson-1-components-style-props'
import { FC, HTMLAttributes } from 'react'

interface DashboardProps extends HTMLAttributes<HTMLDivElement> {}

export const Dashboard: FC<DashboardProps> = () => {
  return <Lesson_1 />
}
