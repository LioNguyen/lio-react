import './ReactflowTemplate.styles.scss'

import { FC, useCallback } from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnConnect,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import { initialEdges, edgeTypes } from './edges'
import { initialNodes, nodeTypes } from './nodes'

interface ReactFlowTemplateProps {}

export const ReactFlowTemplate: FC<ReactFlowTemplateProps> = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  )

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  )
}
