import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { About } from '@/components/pages/about'
import { Home } from '@/components/pages/home'
import { RootLayout } from './components/templates/root-layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
