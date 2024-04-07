import './styles.ts'
import User from './user.json'

import {
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  TableContainerProps,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import { FC, ReactNode, useState } from 'react'

interface User {
  id: string
  name: string
  email: string
  country: string
}

const columns: ColumnDef<User, any>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
  {
    accessorKey: 'country',
    header: 'Country',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
]

interface Lesson_8Props extends TableContainerProps {}

/**
 * If rendering headers, cells, or footers with custom markup, use flexRender instead of cell.getValue() or cell.renderValue().
 */
export const Lesson_8: FC<Lesson_8Props> = ({ className, ...props }) => {
  const [currentRowId, setCurrentRowId] = useState('')

  const userTable = useReactTable({
    columns,
    data: User,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableContainer className={clsx('lesson-8', className)} {...props}>
      <Table>
        <TableCaption>Table Caption</TableCaption>

        {/* Table Head */}
        <Thead>
          {userTable.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.column.columnDef.header as ReactNode}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        {/* Table Body */}
        {/* When click row, detail panel will show */}
        <Tbody>
          {userTable.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              _hover={{
                bg: 'teal.50',
                cursor: 'pointer',
              }}
            >
              {row.id === currentRowId ? (
                <Td colSpan={3}>
                  <Flex justifyContent="center" gap={5}>
                    <Button onClick={() => setCurrentRowId('')}>Cancel</Button>
                    <Button>Detail</Button>
                  </Flex>
                </Td>
              ) : (
                row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} onClick={() => setCurrentRowId(row.id)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))
              )}
            </Tr>
          ))}
        </Tbody>

        {/* Table Foot */}
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
