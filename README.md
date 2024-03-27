**Table of Contents | React Router**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init react-router-dom?](#2-how-to-init-react-router-dom)
  - [2.1 Install library](#21-install-library)
- [3. How to use react-router-dom?](#3-how-to-use-react-router-dom)
  - [3.1 Overview](#31-overview)
  - [3.2 How to create router with `BrowserRouter`?](#32-how-to-create-router-with-browserrouter)
  - [3.3 How to create router in new way with `RouterProvider`?](#33-how-to-create-router-in-new-way-with-routerprovider)
    - [3.3.1 Create RootLayout](#331-create-rootlayout)
    - [3.3.2 Create routes](#332-create-routes)
    - [3.3.3 Create nested routes](#333-create-nested-routes)
    - [3.3.4 How to load data from API before navigating to specific path?](#334-how-to-load-data-from-api-before-navigating-to-specific-path)
    - [3.3.5 How to get route parameters?](#335-how-to-get-route-parameters)
      - [3.3.5.1 Get params in component via `useParams hook`](#3351-get-params-in-component-via-useparams-hook)
      - [3.3.5.2 Get params in function via `function arguments`](#3352-get-params-in-function-via-function-arguments)
    - [3.3.6 How to handle error when loading element?](#336-how-to-handle-error-when-loading-element)

# 1. Overview

## 1.1 Resources

- [React Router Dom | Official Document](https://reactrouter.com/en/main/start/tutorial)
- [React Router Dom Tutorial | Youtube](https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf&index=2&ab_channel=NetNinja)
- [React Router Dom Tutorial | Repo](https://github.com/iamshaunjp/react-router-in-depth/tree/lesson-1)

## 1.2 What can you learn?

- How to use react-router-dom

# 2. How to init react-router-dom?

## 2.1 Install library

```bash
npm install react-router-dom
```

# 3. How to use react-router-dom?

## 3.1 Overview

- Create router (old way): `<BrowserRouter />, <Routes />, <Route />`
- Create router (new way):
  - Component: `<RouterProvider />, <Route />, <Outlet />`
  - Method: `createBrowserRouter(), createRoutesFromElements()`
- Some hooks: `useLoaderData, useParams, useRouteError`

## 3.2 How to create router with `BrowserRouter`?

```js
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import { About } from '@/components/pages/about'
import { Home } from '@/components/pages/home'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
```

## 3.3 How to create router in new way with `RouterProvider`?

### 3.3.1 Create RootLayout

- Use `<Outlet />` to render the child route's element

```js
// src/components/templates/root-layout/RootLayout.tsx

export const RootLayout: FC<RootLayoutProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('root-layout', className)} {...props}>
      <header>
        <nav>
          <h1>Router</h1>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
```

### 3.3.2 Create routes

```js
// src/App.tsx

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
```

### 3.3.3 Create nested routes

- For nested routes, DO NOT need slash `/` before path
- Use `path="*"` to redirect to NotFound page

```js
// src/App.tsx

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

        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
```

### 3.3.4 How to load data from API before navigating to specific path?

- Use `loader` prop and pass a Promise to it

```js
// src/services/careersApi.ts

export class CareersApi {
  public async getCareers() {
    const res = await axios.get(CAREERS_API_ENDPOINT.careers)

    return res.data
  }
}
```

```js
// src/App.tsx

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        // Other routes
        <Route path="/careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersApi.getCareers} />
        </Route>
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
```

### 3.3.5 How to get route parameters?

- Use `:` in `path` prop to indicate params

```js
// src/App.tsx

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        // Other routes
        <Route path="/careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersApi.getCareers} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careersApi.getCareerDetails}
          />
        </Route>
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
```

#### 3.3.5.1 Get params in component via `useParams hook`

```js
// src/components/pages/career-details/CareerDetails.tsx

import { useLoaderData, useParams } from 'react-router-dom'

interface CareerDetailsProps extends HTMLAttributes<HTMLDivElement> {}

export const CareerDetails: FC<CareerDetailsProps> = () => {
  const career: any = useLoaderData()
  const { id } = useParams()

  return (
    <div className="career-details">
      // Your code
    </div>
  )
}
```

#### 3.3.5.2 Get params in function via `function arguments`

```js
// src/types/career.ts

export type CareerDetailApiType = {
  params: {
    id?: string
  }
}
```

```js
// src/services/careersApi.ts

export class CareersApi {
  public async getCareerDetails({ params }: CareerDetailApiType) {
    const { id } = params

    const res = await axios.get(`${CAREERS_API_ENDPOINT.careers}/${id}`)

    return res.data
  }
}
```

### 3.3.6 How to handle error when loading element?

- Use `errorElement` prop

```js
// src/components/pages/careers-error/CareersError.tsx

export const CareersError: FC<CareersErrorProps> = () => {
  const error: any = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}
```

```js
// src/App.tsx

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        // Other routes
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
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
```
