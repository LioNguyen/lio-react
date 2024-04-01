import './MindMapNode.styles.scss'

import clsx from 'clsx'
import { FC } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

type NodeData = {
  label: string
}

interface MindMapNodeProps extends NodeProps<NodeData> {
  className?: string
}

export const MindMapNode: FC<MindMapNodeProps> = ({
  className,
  data,
  ...props
}) => {
  return (
    <div className={clsx('mind-map-node', className)} {...props}>
      <input defaultValue={data.label} />
      {/* <p>{data.label}</p> */}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
