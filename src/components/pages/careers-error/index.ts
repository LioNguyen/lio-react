import { lazyLoad } from '@/utils'

export const CareersError = lazyLoad(
  () => import('./CareersError'),
  (module) => module.CareersError,
)
