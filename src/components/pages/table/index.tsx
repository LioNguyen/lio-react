import './styles.ts'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { Lesson_8 } from '@/components/organisms/lesson-8-table'

interface TableProps extends HTMLAttributes<HTMLDivElement> {}

export const Table: FC<TableProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('table', className)} {...props}>
      <Lesson_8 />
    </div>
  )
}
