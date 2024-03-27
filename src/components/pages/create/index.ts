import { lazyLoad } from '@/utils'

export const Create = lazyLoad(
  () => import('./Create'),
  (module) => module.Create,
)
