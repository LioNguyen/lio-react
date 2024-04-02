import { lazyLoad } from '@/utils'

export const Lesson_3 = lazyLoad(
  () => import('./Lesson_3'),
  (module) => module.Lesson_3,
)
