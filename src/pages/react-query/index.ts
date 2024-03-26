import { lazyLoad } from '@/utils'

export const ReactQuery = lazyLoad(
  () => import('./ReactQuery'),
  (module) => module.ReactQuery,
)
