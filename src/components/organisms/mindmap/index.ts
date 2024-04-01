import { lazyLoad } from '@/utils'

export const Mindmap = lazyLoad(
  () => import('./Mindmap'),
  (module) => module.Mindmap,
)
