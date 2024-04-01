import './Lesson_1.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Background, Controls, Edge, Node, ReactFlow } from 'reactflow'

interface Lesson_1Props extends HTMLAttributes<HTMLDivElement> {}

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {
  const edges: Edge[] = [
    { id: '1', source: '1', target: '2', label: 'to the', type: 'step' },
  ]

  const nodes: Node[] = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Hello' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'World' },
    },
  ]
  return (
    <div className={clsx('lesson-1', className)} {...props}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
