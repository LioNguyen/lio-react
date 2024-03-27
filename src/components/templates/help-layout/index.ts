import { lazyLoad } from '@/utils'

export const HelpLayout = lazyLoad(
  () => import('./HelpLayout'),
  (module) => module.HelpLayout,
)
