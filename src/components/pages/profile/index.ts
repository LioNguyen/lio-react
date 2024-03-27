import { lazyLoad } from '@/utils'

export const Profile = lazyLoad(
  () => import('./Profile'),
  (module) => module.Profile,
)
