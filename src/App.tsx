import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { RootLayout } from '@/components/templates/root-layout'
import { Dashboard } from './components/pages/dashboard'
import { Create } from './components/pages/create'
import { Profile } from './components/pages/profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
