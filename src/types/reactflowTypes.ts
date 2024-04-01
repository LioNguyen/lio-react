import { Edge, Node, OnEdgesChange, OnNodesChange } from 'reactflow'

export type RFState = {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
}
