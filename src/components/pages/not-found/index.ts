import { lazyLoad } from '@/utils'

export const NotFound = lazyLoad(
  () => import('./NotFound'),
  (module) => module.NotFound,
)
