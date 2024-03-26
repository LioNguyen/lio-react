import { lazyLoad } from '@/utils'

export const Practice = lazyLoad(
  () => import('./Practice'),
  (module) => module.Practice,
)
