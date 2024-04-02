import './Dashboard.styles.scss'

import { FC, HTMLAttributes } from 'react'

import { Lesson_3 } from '@/components/organisms/lesson-3-grid-layouts'
import { useLoaderData } from 'react-router-dom'
import { TaskType } from '@/types'

interface DashboardProps extends HTMLAttributes<HTMLDivElement> {}

export const Dashboard: FC<DashboardProps> = () => {
  const taskLists = useLoaderData() as TaskType[]

  if (!taskLists) {
    return <></>
  }

  return (
    <>
      {/* <Lesson_1 /> */}
      <Lesson_3 taskLists={taskLists} />
    </>
  )
}
