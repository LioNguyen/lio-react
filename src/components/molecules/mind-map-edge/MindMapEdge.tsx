import './MindMapEdge.styles.scss'

import { FC } from 'react'
import { BaseEdge, EdgeProps, getStraightPath } from 'reactflow'

interface MindMapEdgeProps extends EdgeProps {}

export const MindMapEdge: FC<MindMapEdgeProps> = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  ...props
}) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })

  return <BaseEdge path={edgePath} {...props} />
}
