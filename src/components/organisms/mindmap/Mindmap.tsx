import './Mindmap.styles.scss'

import clsx from 'clsx'
import { FC, useCallback, useRef } from 'react'
import ReactFlow, {
  Background,
  Controls,
  EdgeTypes,
  NodeOrigin,
  NodeTypes,
  OnConnectEnd,
  OnConnectStart,
  Panel,
} from 'reactflow'

import { MindMapEdge } from '@/components/molecules/mind-map-edge'
import { MindMapNode } from '@/components/molecules/mind-map-node'
import { useMindmap } from '@/hooks/useMindmap'
import { useMindmapStore } from '@/store'
import { RFState } from '@/types'

interface MindmapProps {}

const nodeTypes: NodeTypes = {
  mindmap: MindMapNode,
}

const edgeTypes: EdgeTypes = {
  mindmap: MindMapEdge,
}

// this places the node origin in the center of a node
// [0, 0] places it at the top left corner, [0.5, 0.5] right in the center and [1, 1] at the bottom right of its position.
const nodeOrigin: NodeOrigin = [0.5, 0.5]

/**
 * position: position of Node compared to its parent Node
 * positionAbsolute: position of Node in Flow Board
 *  -> Use flowToScreenPosition to convert into screen position
 */
export const Mindmap: FC<MindmapProps> = ({ ...props }) => {
  const connectingNodeId = useRef<string | null>(null)

  const { getChildNodePosition, handleConnectEnd } = useMindmap()
  const { edges, nodes, onEdgesChange, onNodesChange } = useMindmapStore(
    (state: RFState) => ({
      nodes: state.nodes,
      edges: state.edges,
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
      addChildNode: state.addChildNode,
    }),
  )

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId
  }, [])

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => {
      handleConnectEnd(event, connectingNodeId.current)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getChildNodePosition],
  )

  return (
    <ReactFlow
      className={clsx('mindmap-wrapper')}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodeOrigin={nodeOrigin}
      onConnectEnd={onConnectEnd}
      onConnectStart={onConnectStart}
      fitView
      style={{
        background: '#B3C8CF',
      }}
      {...props}
    >
      <Background />
      <Controls
        // Disable button to lock/unlock map
        showInteractive={false}
      />
      <Panel position="top-left">React Flow Mind Map</Panel>
    </ReactFlow>
  )
}
