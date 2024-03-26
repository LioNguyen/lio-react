import './DownloadFile.styles.scss'

import { Heading, Link, VStack } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface DownloadFileProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Use `a` element
 * Use `href` prop for download link
 * Use `download` prop for download name
 */
export const DownloadFile: FC<DownloadFileProps> = ({
  className,
  ...props
}) => {
  return (
    <VStack className={clsx('download-file', className)} {...props}>
      <Heading>Download File</Heading>
      <Link href="http://localhost:5173/test_img.jpeg" download="test_img">
        Download Image
      </Link>
      <Link href="http://localhost:5173/test_pdf.pdf" download="test_pdf">
        Download PDF
      </Link>
      <Link href="http://localhost:5173/test_excel.xlsx" download="test_excel">
        Download Excel
      </Link>
    </VStack>
  )
}
