import { lazyLoad } from '@/utils'

export const Faq = lazyLoad(
  () => import('./Faq'),
  (module) => module.Faq,
)
