import { lazyLoad } from '@/utils'

export const MindMapNode = lazyLoad(
  () => import('./MindMapNode'),
  (module) => module.MindMapNode,
)
