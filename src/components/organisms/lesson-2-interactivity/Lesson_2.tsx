import './Lesson_2.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'
import ReactFlow, {
  Background,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  Connection,
} from 'reactflow'

interface Lesson_2Props extends HTMLAttributes<HTMLDivElement> {}

const initialEdges: Edge[] = [
  {
    id: '1-2',
    source: '1',
    target: '2',
  },
]

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
]

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  const [edges, setEdges] = useState(initialEdges)
  const [nodes, setNodes] = useState(initialNodes)

  const onConnect = (params: Edge | Connection) => {
    setEdges((eds) => addEdge(params, eds))
  }

  const onEdgeChange = (changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds))
  }

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds))
  }

  return (
    <div className={clsx('lesson-2', className)} {...props}>
      <ReactFlow
        edges={edges}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgeChange}
        onNodesChange={onNodesChange}
        // Make sure that the initial node is centered in the view
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
