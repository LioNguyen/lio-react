import { lazyLoad } from '@/utils'

export const Axios = lazyLoad(
  () => import('./Axios'),
  (module) => module.Axios,
)
