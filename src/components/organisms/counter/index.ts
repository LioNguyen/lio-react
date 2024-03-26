import { lazyLoad } from '@/utils'

export const Counter = lazyLoad(
  () => import('./Counter'),
  (module) => module.Counter,
)
