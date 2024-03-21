import { lazyLoad } from '@/utils'

export const Todo = lazyLoad(
  () => import('./Todo'),
  (module) => module.Todo,
)
