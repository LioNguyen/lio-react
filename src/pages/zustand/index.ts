import { lazyLoad } from '@/utils'

export const Zustand = lazyLoad(
  () => import('./Zustand'),
  (module) => module.Zustand,
)
