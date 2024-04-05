import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Create } from '@/components/pages/create'
import { Dashboard } from '@/components/pages/dashboard'
import { Error } from '@/components/pages/error'
import { Profile } from '@/components/pages/profile'
import { Table } from '@/components/pages/table'
import { RootLayout } from '@/components/templates/root-layout'
import { TasksApi } from '@/services/tasksApi'

const taskApi = new TasksApi()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={taskApi.getTask}
        errorElement={<Error />}
      />
      <Route path="create" element={<Create />} action={taskApi.createTask} />
      <Route path="profile" element={<Profile />} />
      <Route path="table" element={<Table />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
