import { lazyLoad } from '@/utils'

export const UploadFile = lazyLoad(
  () => import('./UploadFile'),
  (module) => module.UploadFile,
)
