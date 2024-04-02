import { useMindmapStore } from '@/store'
import { Node, XYPosition, useReactFlow, useStoreApi } from 'reactflow'

export const useMindmap = () => {
  const store = useStoreApi()
  const { screenToFlowPosition } = useReactFlow()
  const addChildNode = useMindmapStore((state) => state.addChildNode)

  /**
   * Steps to getChildNodePosition:
   * 1. Check DOM Node that wraps all React Flow Nodes exists or not
   * 2. Check position, width, height property of ParentNode whether they exits or not
   * 3. Check whether it is touch event or mouse event
   * 4. Get position from event
   * 5. Convert screen position into flow position (using screenToFlowPosition)
   * @returns x, y
   */
  const getChildNodePosition = (
    event: MouseEvent | TouchEvent,
    parentNode?: Node,
  ) => {
    const { domNode } = store.getState()

    if (
      !domNode ||
      !parentNode?.positionAbsolute ||
      !parentNode?.width ||
      !parentNode?.height
    ) {
      return
    }

    const isTouchEvent = 'touches' in event
    const eventPosition: XYPosition = {
      x: isTouchEvent ? event.touches[0].clientX : event.clientX,
      y: isTouchEvent ? event.touches[0].clientY : event.clientY,
    }

    // we need to remove the wrapper bounds, in order to get the correct mouse position
    const panePosition: XYPosition = screenToFlowPosition(eventPosition)

    // we are calculating with positionAbsolute here because child nodes are positioned relative to their parent
    return {
      x: panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2,
      y: panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2,
    }
  }

  /**
   * Steps to handleConnectEnd:
   * 1. Get all nodes in Flow with store
   * 2. Check whether new event target is pane with className "react-flow__pane"
   * 3. Get parent node info and child node position
   */
  const handleConnectEnd = (
    event: MouseEvent | TouchEvent,
    sourceNodeId: string | null,
  ): void => {
    const { nodeInternals } = store.getState()

    const targetIsPane = (event.target as Element).classList.contains(
      'react-flow__pane',
    )
    const node = (event.target as Element).closest('.react-flow__node')

    if (node) {
      ;(node.querySelector('.input__label') as HTMLInputElement)?.focus({
        preventScroll: true,
      })
    } else if (targetIsPane && sourceNodeId) {
      const parentNode = nodeInternals.get(sourceNodeId)
      const childNodePosition = getChildNodePosition(event, parentNode)

      if (parentNode && childNodePosition) {
        addChildNode(childNodePosition, parentNode)
      }
    }
  }

  return { getChildNodePosition, handleConnectEnd }
}
