import { Edge, Node, OnEdgesChange, OnNodesChange, XYPosition } from 'reactflow'

export type RFState = {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  addChildNode: (position: XYPosition, parentNode: Node) => void
  updateNodeLabel: (nodeId: string, label: string) => void
}
