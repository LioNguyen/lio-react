import { lazyLoad } from '@/utils'

export const Navbar = lazyLoad(
  () => import('./Navbar'),
  (module) => module.Navbar,
)
