import { lazyLoad } from '@/utils'

export const Loader = lazyLoad(
  () => import('./Loader'),
  (module) => module.Loader,
)
