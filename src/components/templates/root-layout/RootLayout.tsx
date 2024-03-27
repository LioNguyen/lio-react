import './RootLayout.styles.scss'

import { Grid, GridItem } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/organisms/navbar'

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const RootLayout: FC<RootLayoutProps> = ({ className, ...props }) => {
  return (
    <Grid
      className={clsx('root-layout', className)}
      templateColumns="repeat(6,1fr)"
      {...props}
    >
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minH={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <span>Sidebar</span>
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
