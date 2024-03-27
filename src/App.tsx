import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { About } from '@/components/pages/about'
import { CareerDetails } from '@/components/pages/career-details'
import { Careers } from '@/components/pages/careers'
import { Contact } from '@/components/pages/contact'
import { Faq } from '@/components/pages/faq'
import { Home } from '@/components/pages/home'
import { NotFound } from '@/components/pages/not-found'
import { CareersLayout } from '@/components/templates/careers-layout'
import { HelpLayout } from '@/components/templates/help-layout'
import { RootLayout } from '@/components/templates/root-layout'
import { CareersApi } from '@/services/careersApi'
import { CareersError } from '@/components/pages/careers-error'

function App() {
  const careersApi = new CareersApi()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        <Route
          path="/careers"
          element={<CareersLayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={careersApi.getCareers} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careersApi.getCareerDetails}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
