import { lazyLoad } from '@/utils'

export const RootLayout = lazyLoad(
  () => import('./RootLayout'),
  (module) => module.RootLayout,
)
