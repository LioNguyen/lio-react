import './RootLayout.styles.scss'

import { Container, Flex } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const RootLayout: FC<RootLayoutProps> = ({ className, ...props }) => {
  return (
    <Container className={clsx('root-layout', className)} pb="15px" {...props}>
      <header>
        <Flex as="nav" alignItems="center" gap="15px" p="15px 0">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/react-query">React Query</NavLink>
          <NavLink to="/zustand">Zustand</NavLink>
          <NavLink to="/axios">Axios</NavLink>
          <NavLink to="/case-study">Case Study</NavLink>
        </Flex>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  )
}
