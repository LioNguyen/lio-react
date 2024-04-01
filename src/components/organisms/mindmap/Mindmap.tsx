import './Mindmap.styles.scss'

import clsx from 'clsx'
import { FC } from 'react'
import ReactFlow, {
  Controls,
  EdgeTypes,
  NodeOrigin,
  NodeTypes,
  Panel,
} from 'reactflow'

import { useMindmapStore } from '@/store'
import { RFState } from '@/types'
import { MindMapNode } from '@/components/molecules/mind-map-node'
import { MindMapEdge } from '@/components/molecules/mind-map-edge'

interface MindmapProps {}

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
})

const nodeTypes: NodeTypes = {
  mindmap: MindMapNode,
}

const edgeTypes: EdgeTypes = {
  mindmap: MindMapEdge,
}

// this places the node origin in the center of a node
const nodeOrigin: NodeOrigin = [0.5, 0.5]

export const Mindmap: FC<MindmapProps> = ({ ...props }) => {
  const { edges, nodes, onEdgesChange, onNodesChange } =
    useMindmapStore(selector)

  return (
    <ReactFlow
      className={clsx('mindmap')}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodeOrigin={nodeOrigin}
      fitView
      {...props}
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">React Flow Mind Map</Panel>
    </ReactFlow>
  )
}
