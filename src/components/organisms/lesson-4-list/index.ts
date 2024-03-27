import { lazyLoad } from '@/utils'

export const Lesson_4 = lazyLoad(
  () => import('./Lesson_4'),
  (module) => module.Lesson_4,
)
