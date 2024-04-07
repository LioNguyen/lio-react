import './styles.ts'

import { Grid, GridItem } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/organisms/navbar'
import { Sidebar } from '@/components/organisms/sidebar'

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const RootLayout: FC<RootLayoutProps> = ({ className, ...props }) => {
  return (
    <Grid
      className={clsx('root-layout', className)}
      // Divided into 6 pairs of columns, each pair has 1fr and 3fr ratio
      // gridTemplateColumns="repeat(6,1fr 3fr)"

      // Divided into 6 columns, each column has 1fr ratio
      gridTemplateColumns="repeat(6,1fr)"
      {...props}
    >
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="brand.900"
        minH={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
