import { lazyLoad } from '@/utils'

export const About = lazyLoad(
  () => import('./About'),
  (module) => module.About,
)
