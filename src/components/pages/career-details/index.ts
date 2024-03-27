import { lazyLoad } from '@/utils'

export const CareerDetails = lazyLoad(
  () => import('./CareerDetails'),
  (module) => module.CareerDetails,
)
