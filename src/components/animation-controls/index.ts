import { lazyLoad } from '@/utils'

export const AnimationControls = lazyLoad(
  () => import('./AnimationControls'),
  (module) => module.AnimationControls,
)
