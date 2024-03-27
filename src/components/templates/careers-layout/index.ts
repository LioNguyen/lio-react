import { lazyLoad } from '@/utils'

export const CareersLayout = lazyLoad(
  () => import('./CareersLayout'),
  (module) => module.CareersLayout,
)
