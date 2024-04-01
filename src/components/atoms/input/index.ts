import { lazyLoad } from '@/utils'

export const Input = lazyLoad(
  () => import('./Input'),
  (module) => module.Input,
)
