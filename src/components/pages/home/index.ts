import { lazyLoad } from '@/utils'

export const Home = lazyLoad(
  () => import('./Home'),
  (module) => module.Home,
)
