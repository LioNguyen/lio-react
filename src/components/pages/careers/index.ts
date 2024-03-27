import { lazyLoad } from '@/utils'

export const Careers = lazyLoad(
  () => import('./Careers'),
  (module) => module.Careers,
)
