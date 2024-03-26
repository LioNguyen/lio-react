import { lazyLoad } from '@/utils'

export const DragDropFile = lazyLoad(
  () => import('./DragDropFile'),
  (module) => module.DragDropFile,
)
