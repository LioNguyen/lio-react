import './styles.ts'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { TaskTable } from '@/components/organisms/task-table/index.tsx'

interface TableProps extends HTMLAttributes<HTMLDivElement> {}

export const Table: FC<TableProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('table', className)} {...props}>
      <TaskTable />
    </div>
  )
}
