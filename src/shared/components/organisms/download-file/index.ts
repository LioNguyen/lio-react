import { lazyLoad } from '@/utils'

export const DownloadFile = lazyLoad(
  () => import('./DownloadFile'),
  (module) => module.DownloadFile,
)
