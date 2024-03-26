import { lazyLoad } from '@/utils'

export const CaseStudy = lazyLoad(
  () => import('./CaseStudy'),
  (module) => module.CaseStudy,
)
