import './styles.ts'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import { Dispatch, FC } from 'react'
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { TableDatum } from '@/types'

interface TaskTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  setData: Dispatch<TData[]>
}

export const TaskTable: FC<TaskTableProps<TableDatum>> = ({
  columns,
  data,
  setData,
  ...props
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData(
          data.map((row: any, index: number) =>
            index === rowIndex ? { ...data[rowIndex], [columnId]: value } : row,
          ),
        )
      },
    },
  })

  return (
    <Box className={clsx('task-table')} {...props}>
      <Heading mb="15px">TanStack Table</Heading>

      <TableContainer>
        <Table className="table">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr className="tr" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th className="th" key={header.id} w={header.getSize()}>
                    {header.column.columnDef.header as string}
                    <Box
                      className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                    />
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody>
            {(table.getRowModel().rows || []).map((row) => (
              <Tr className="tr" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td className="td" key={cell.id} w={cell.column.getSize()}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
