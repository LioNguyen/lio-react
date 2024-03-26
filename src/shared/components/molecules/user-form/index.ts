import { lazyLoad } from '@/utils'

export const UserForm = lazyLoad(
  () => import('./UserForm'),
  (module) => module.UserForm,
)
