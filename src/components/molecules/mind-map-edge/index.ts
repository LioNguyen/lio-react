import { lazyLoad } from '@/utils'

export const MindMapEdge = lazyLoad(
  () => import('./MindMapEdge'),
  (module) => module.MindMapEdge,
)
