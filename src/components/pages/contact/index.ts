import { lazyLoad } from '@/utils'

export const Contact = lazyLoad(
  () => import('./Contact'),
  (module) => module.Contact,
)
