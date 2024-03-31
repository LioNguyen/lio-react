import { lazyLoad } from '@/utils'

export const Lesson_6 = lazyLoad(
  () => import('./Lesson_6'),
  (module) => module.Lesson_6,
)
