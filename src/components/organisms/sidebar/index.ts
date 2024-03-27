import { lazyLoad } from '@/utils'

export const Sidebar = lazyLoad(
  () => import('./Sidebar'),
  (module) => module.Sidebar,
)
