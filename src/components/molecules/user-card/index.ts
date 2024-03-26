import { lazyLoad } from '@/utils'

export const UserCard = lazyLoad(
  () => import('./UserCard'),
  (module) => module.UserCard,
)
