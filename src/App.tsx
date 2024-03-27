import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { About } from '@/components/pages/about'
import { Contact } from '@/components/pages/contact'
import { Faq } from '@/components/pages/faq'
import { Home } from '@/components/pages/home'
import { HelpLayout } from '@/components/templates/help-layout'
import { RootLayout } from '@/components/templates/root-layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
