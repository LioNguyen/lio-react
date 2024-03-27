import { lazyLoad } from '@/utils'

export const Dashboard = lazyLoad(
  () => import('./Dashboard'),
  (module) => module.Dashboard,
)
