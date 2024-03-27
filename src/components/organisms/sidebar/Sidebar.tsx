import './Sidebar.styles.scss'

import { FC, HTMLAttributes } from 'react'
import { Lesson_4 } from '../lesson-4-list'

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = () => {
  return <Lesson_4 />
}
