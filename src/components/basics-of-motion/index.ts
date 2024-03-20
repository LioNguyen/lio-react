import { lazyLoad } from '@/utils'

export const BasicsOfMotion = lazyLoad(
  () => import('./BasicsOfMotion'),
  (module) => module.BasicsOfMotion,
)
