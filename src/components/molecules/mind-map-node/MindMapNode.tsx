import { useMindmapStore } from '@/store'
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

/**
 * xPos, yPos: position when creating Node
 */
export const MindMapNode: FC<MindMapNodeProps> = ({
  className,
  id,
  data,
  xPos,
  yPos,
  ...props
}) => {
  const updateNodeLabel = useMindmapStore((state) => state.updateNodeLabel)

  return (
    <>
      <div className={clsx('mind-map-node', className)} {...props}>
        <div className="dragHandle">
          {/* icon taken from grommet https://icons.grommet.io */}
          <svg viewBox="0 0 24 24">
            <path
              fill="#333"
              stroke="#333"
              strokeWidth="1"
              d="M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z"
            />
          </svg>
        </div>

        <span className="note">(Target)</span>

        <div className="input-group">
          <label htmlFor={`nodeLabel-${id}`}>Label</label>
          <input
            id={`nodeLabel-${id}`}
            className="input__label"
            defaultValue={data.label}
            onChange={(e) => updateNodeLabel(id, e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor={`nodeId-${id}`}>Id</label>
          <input id={`nodeId-${id}`} defaultValue={id} disabled />
        </div>
        <div className="input-group">
          <label htmlFor={`nodeId-${xPos}`}>xPos</label>
          <input id={`nodeId-${xPos}`} defaultValue={xPos} disabled />
        </div>
        <div className="input-group">
          <label htmlFor={`nodeId-${yPos}`}>yPos</label>
          <input id={`nodeId-${yPos}`} defaultValue={yPos} disabled />
        </div>

        <span className="note">(Source)</span>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}
