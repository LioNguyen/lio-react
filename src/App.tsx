import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Axios } from '@/pages/axios'
import { CaseStudy } from '@/pages/case-study'
import { Home } from '@/pages/home'
import { ReactQuery } from '@/pages/react-query'
import { Zustand } from '@/pages/zustand'
import { RootLayout } from '@/shared/components/templates/root-layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="zustand" element={<Zustand />} />
        <Route path="react-query" element={<ReactQuery />} />
        <Route path="axios" element={<Axios />} />
        <Route path="case-study" element={<CaseStudy />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
