import { lazyLoad } from '@/utils'

export const Lesson_1 = lazyLoad(
  () => import('./Lesson_1'),
  (module) => module.Lesson_1,
)
