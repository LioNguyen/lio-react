import * as S from './styles.ts'

import { Box, Heading, Link } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { Columns } from '@/components/molecules/columns'
import { CustomTabs, Tab } from '@/components/molecules/custom-tabs'
import { HoverEffect } from '@/components/molecules/hover-effect'
import { TextEllipsis } from '@/components/molecules/text-ellipsis'
import { LinkUnderline } from '@/components/molecules/link-underline'

interface CssSampleProps extends HTMLAttributes<HTMLDivElement> {}

export const CssSample: FC<CssSampleProps> = ({ className, ...props }) => {
  const tabList: Tab[] = [
    {
      title: 'Layout',
      content: (
        <Box>
          <Columns />
        </Box>
      ),
    },
    {
      title: 'Text',
      content: (
        <Box>
          <TextEllipsis />
        </Box>
      ),
    },
    {
      title: 'Pseudo-elements',
      content: (
        <Box>
          <LinkUnderline />
        </Box>
      ),
    },
    {
      title: 'Effect',
      content: (
        <Box>
          <HoverEffect />
        </Box>
      ),
    },
  ]

  return (
    <Box className={clsx('css-sample', className)} {...props}>
      <CustomTabs tabList={tabList} colorScheme="pink" />
    </Box>
  )
}
