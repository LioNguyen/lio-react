import { lazyLoad } from '@/utils'

export const ViewBaseAnimations = lazyLoad(
  () => import('./ViewBaseAnimations'),
  (module) => module.ViewBaseAnimations,
)
