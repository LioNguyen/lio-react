import { Input } from '@/components/atoms/input'
import './Lesson_3.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'
import ReactFlow, {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  NodeTypes,
  Position,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from 'reactflow'

interface Lesson_3Props extends HTMLAttributes<HTMLDivElement> {}

const nodeTypes: NodeTypes = {
  textUpdater: Input,
}

const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-2',
    type: 'output',
    targetPosition: Position.Top,
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: Position.Top,
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
]

const initialEdges: Edge[] = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'b' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'a' },
]

const rfStyle = {
  backgroundColor: '#B8CEFF',
}

export const Lesson_3: FC<Lesson_3Props> = ({ className, ...props }) => {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onConnect = (connection: Edge | Connection) => {
    setEdges((eds: any) => addEdge(connection, eds))
  }

  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges((eds: any) => applyEdgeChanges(changes, eds))
  }

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds))
  }

  return (
    <div className={clsx('lesson-3', className)} {...props}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        fitView
        style={rfStyle}
      />
    </div>
  )
}
