import './styles.ts'

import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import clsx from 'clsx'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

import { EditableCell } from '@/components/molecules/editable-cell'
import { StatusCell } from '@/components/molecules/status-cell'
import { Lesson_8 } from '@/components/organisms/lesson-8-table'
import { TaskTable } from '@/components/organisms/task-table'
import { TableApi } from '@/services/tableApi.ts'
import { useTableStore } from '@/store/tableStore.ts'
import { Status, TableDatum } from '@/types'

const columns: ColumnDef<TableDatum, unknown>[] = [
  {
    accessorKey: 'task',
    header: 'Task',
    size: 225,
    cell: EditableCell,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: StatusCell,
  },
  {
    accessorKey: 'due',
    header: 'Due',
    cell: (props) => <div>{props.getValue() as string}</div>,
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: (props) => <div>{props.getValue() as string}</div>,
  },
]

interface TableProps extends HTMLAttributes<HTMLDivElement> {}

export const Table: FC<TableProps> = ({ className, ...props }) => {
  const tableApi = new TableApi()
  const { createStatus } = useTableStore()

  // START: Fetch table data and statuses
  const { data: tableData } = useQuery({
    queryKey: ['tableData'],
    queryFn: tableApi.getTableData,
  })
  const { data: statuses } = useQuery<Status[]>({
    queryKey: ['statuses'],
    queryFn: tableApi.getStatuses,
  })
  // END: Fetch table data and statuses

  const [data, setData] = useState<TableDatum[]>(tableData || [])

  useEffect(() => {
    setData(tableData || [])
  }, [tableData])

  useEffect(() => {
    if (statuses) {
      createStatus(statuses)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statuses])

  if (!tableData || !statuses) return null

  return (
    <div className={clsx('table', className)} {...props}>
      <Lesson_8 />
      <TaskTable columns={columns} data={data} setData={setData} />
    </div>
  )
}
