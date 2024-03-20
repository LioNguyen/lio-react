import { lazyLoad } from '@/utils'

export const ScrollAnimations = lazyLoad(
  () => import('./ScrollAnimations'),
  (module) => module.ScrollAnimations,
)
