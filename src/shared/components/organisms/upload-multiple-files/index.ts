import { lazyLoad } from '@/utils'

export const UploadMultipleFiles = lazyLoad(
  () => import('./UploadMultipleFiles'),
  (module) => module.UploadMultipleFiles,
)
