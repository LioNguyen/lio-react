import './CaseStudy.styles.scss'

import { Box } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { DownloadFile } from '@/shared/components/organisms/download-file'
import { DragDropFile } from '@/shared/components/organisms/drag-drop-file'
import { UploadFile } from '@/shared/components/organisms/upload-file'
import { UploadMultipleFiles } from '@/shared/components/organisms/upload-multiple-files'

interface CaseStudyProps extends HTMLAttributes<HTMLDivElement> {}

export const CaseStudy: FC<CaseStudyProps> = ({ className, ...props }) => {
  return (
    <Box className={clsx('use-case', className)} {...props}>
      <UploadFile />
      <UploadMultipleFiles />
      <DownloadFile />
      <DragDropFile />
    </Box>
  )
}
