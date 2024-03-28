import { lazyLoad } from '@/utils'

export const Breadcrumbs = lazyLoad(
  () => import('./Breadcrumbs'),
  (module) => module.Breadcrumbs,
)
