import { lazyLoad } from '@/utils'

export const Lesson_7 = lazyLoad(
  () => import('./Lesson_7'),
  (module) => module.Lesson_7,
)
