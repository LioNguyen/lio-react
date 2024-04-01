import { lazyLoad } from '@/utils'

export const ReactFlowTemplate = lazyLoad(
  () => import('./ReactFlowTemplate'),
  (module) => module.ReactFlowTemplate,
)
