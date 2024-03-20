import { lazyLoad } from '@/utils'

export const Gestures = lazyLoad(
  () => import('./Gestures'),
  (module) => module.Gestures,
)
