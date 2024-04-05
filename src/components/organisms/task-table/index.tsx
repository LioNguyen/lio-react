import './styles.ts'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface TaskTableProps extends HTMLAttributes<HTMLDivElement> {}

export const TaskTable: FC<TaskTableProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx('task-table', className)} {...props}>
      <h1>TaskTable</h1>
      {children}
    </div>
  )
}
