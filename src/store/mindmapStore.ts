import { RFState } from '@/types'
import { nanoid } from 'nanoid'
import {
  EdgeChange,
  Node,
  NodeChange,
  XYPosition,
  applyEdgeChanges,
  applyNodeChanges,
} from 'reactflow'
import { create } from 'zustand'

export const useMindmapStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: 'root',
      type: 'mindmap',
      data: { label: 'React Flow Mind Map' },
      position: { x: 0, y: 0 },
    },
  ],
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({ edges: applyEdgeChanges(changes, get().edges) })
  },
  addChildNode: (position: XYPosition, parentNode: Node) => {
    const newNode = {
      id: nanoid(),
      type: 'mindmap',
      data: { label: 'New Node' },
      position,
      parentNode: parentNode.id,
    }

    const newEdge = {
      id: nanoid(),
      source: parentNode.id,
      target: newNode.id,
    }

    set({
      nodes: [...get().nodes, newNode],
      edges: [...get().edges, newEdge],
    })
  },
  updateNodeLabel: (nodeId: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            label,
          }
        }

        return node
      }),
    })
  },
}))
