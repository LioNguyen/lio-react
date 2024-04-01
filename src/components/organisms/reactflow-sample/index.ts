import { lazyLoad } from '@/utils'

export const ReactFlowSample = lazyLoad(
  () => import('./ReactFlowSample'),
  (module) => module.ReactFlowSample,
)
