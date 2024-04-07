import './styles.ts'

import { Input } from '@chakra-ui/react'
import { CellContext } from '@tanstack/react-table'
import clsx from 'clsx'
import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react'

import { TableDatum } from '@/types'

interface EditableCellProps
  extends HTMLAttributes<HTMLDivElement>,
    CellContext<TableDatum, unknown> {}

export const EditableCell: FC<EditableCellProps> = ({
  className,
  getValue,
  column,
  row,
  table,
  ...props
}) => {
  const initialValue = getValue() as string
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onBlur: FocusEventHandler<HTMLInputElement> = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  const onchange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <Input
      value={value}
      onBlur={onBlur}
      onChange={onchange}
      className={clsx('editable-cell', className)}
      width="85%"
      size="sm"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      {...props}
    />
  )
}
