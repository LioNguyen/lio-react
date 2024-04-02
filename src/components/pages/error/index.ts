import { lazyLoad } from '@/utils'

export const Error = lazyLoad(
  () => import('./Error'),
  (module) => module.Error,
)
