import './styles.ts'

import {
  Box,
  BoxProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { CellContext } from '@tanstack/react-table'
import { FC, HTMLAttributes } from 'react'

import { Status, TableDatum } from '@/types'
import { useTableStore } from '@/store/tableStore.ts'

interface ColorIconProps extends BoxProps {
  color: string
}
const ColorIcon: FC<ColorIconProps> = ({ color, ...props }) => {
  return <Box w="12px" h="12px" bgColor={color} borderRadius="3px" {...props} />
}

interface StatusCellProps
  extends HTMLAttributes<HTMLDivElement>,
    CellContext<TableDatum, unknown> {}

export const StatusCell: FC<StatusCellProps> = ({
  getValue,
  column,
  row,
  table,
  ...props
}) => {
  const statuses = useTableStore((state) => state.statuses)

  const { color, name } = (getValue() as Status) || {}
  const { updateData } = table.options.meta || {}

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false} {...props}>
      <MenuButton
        h="100%"
        w="100%"
        textAlign="left"
        p={1.5}
        bg={color || 'transparent'}
        color="gray.900"
      >
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => updateData && updateData(row.index, column.id, null)}
        >
          <ColorIcon color="red.400" mr={3} />
          None
        </MenuItem>
        {statuses.length &&
          statuses.map((status) => (
            <MenuItem
              key={status.id}
              onClick={() =>
                updateData && updateData(row.index, column.id, status)
              }
            >
              <ColorIcon color={status.color} mr={3} />
              {status.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}
