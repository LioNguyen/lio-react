import './Input.styles.scss'

import clsx from 'clsx'
import { ChangeEvent, FC } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

interface InputProps extends NodeProps {
  className?: string
}

const handleStyle = { left: 10 }

export const Input: FC<InputProps> = ({
  className,
  data,
  isConnectable,
  ...props
}) => {
  console.log({ data })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div className={clsx('input', className)} {...props}>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" className="nodrag" name="text" onChange={onChange} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  )
}
