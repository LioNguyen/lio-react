import { lazyLoad } from '@/utils'

export const Users = lazyLoad(
  () => import('./Users'),
  (module) => module.Users,
)
