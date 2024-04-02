import { lazyLoad } from '@/utils'

export const Lesson_5 = lazyLoad(
  () => import('./Lesson_5'),
  (module) => module.Lesson_5,
)
