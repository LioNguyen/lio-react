import { lazyLoad } from '@/utils'

export const Lesson_2 = lazyLoad(
  () => import('./Lesson_2'),
  (module) => module.Lesson_2,
)
