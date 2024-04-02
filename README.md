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
  - [3.4 How to load data from API before navigating to specific path?](#34-how-to-load-data-from-api-before-navigating-to-specific-path)
    - [3.4.1 Create function to get API](#341-create-function-to-get-api)
    - [3.4.2 Use `loader` prop to execute function](#342-use-loader-prop-to-execute-function)
    - [3.4.3 Use `useLoaderData()` hook to get data passed from `<Route />`](#343-use-useloaderdata-hook-to-get-data-passed-from-route-)
  - [3.5 How to get route parameters?](#35-how-to-get-route-parameters)
    - [3.5.1 Get params in component via `useParams` hook](#351-get-params-in-component-via-useparams-hook)
    - [3.5.2 Get params in function via `arguments`](#352-get-params-in-function-via-arguments)
  - [3.6 How to get current URL info via `useLocation` hook?](#36-how-to-get-current-url-info-via-uselocation-hook)
  - [3.7 How to handle error when loading element?](#37-how-to-handle-error-when-loading-element)
  - [3.8 How to handle form data?](#38-how-to-handle-form-data)
    - [3.8.1 Create function to post API](#381-create-function-to-post-api)
    - [3.8.2 Use `action` prop to execute function at router](#382-use-action-prop-to-execute-function-at-router)
    - [3.8.3 Use `useActionData()` hook to get data passed from `<Route />`](#383-use-useactiondata-hook-to-get-data-passed-from-route-)
  - [3.9 How to navigate or redirect?](#39-how-to-navigate-or-redirect)
    - [3.9.1 `<Navigate />` component](#391-navigate--component)
    - [3.9.2 `redirect` method](#392-redirect-method)

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
  - Method: `createBrowserRouter(), createRoutesFromElements(), redirect()`
- Hooks get data via Route prop: `useActionData, useLoaderData, useParams, useRouteError`
- Hooks get data via url: `useLocation`

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
        // render the child route's element
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

## 3.4 How to load data from API before navigating to specific path?

### 3.4.1 Create function to get API

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

### 3.4.2 Use `loader` prop to execute function

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

### 3.4.3 Use `useLoaderData()` hook to get data passed from `<Route />`

```js
// src/components/pages/careers/Careers.tsx

export const Careers: FC<CareersProps> = () => {
  const careers: any = useLoaderData()

  return (
    <div className="careers">
      {(careers ?? []).map((career: any) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}
```

## 3.5 How to get route parameters?

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

### 3.5.1 Get params in component via [`useParams`](https://reactrouter.com/en/6.22.3/hooks/use-params) hook

- The `useParams` hook `returns` an `object of key/value pairs` of the dynamic params from the current URL that were `matched by the <Route path>`. Child routes inherit all params from their parent routes.

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

### 3.5.2 Get params in function via `arguments`

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

## 3.6 How to get current URL info via [`useLocation`](https://reactrouter.com/en/6.22.3/hooks/use-location) hook?

- This hook `returns` the `current location object`. This can be useful if you'd like to perform some side effect whenever the current location changes.

```js
// src/components/molecules/breadcrumbs/Breadcrumbs.tsx

export const Breadcrumbs: FC<BreadcrumbsProps> = () => {
  const location = useLocation()

  let currentLink = ''

  // Create breadcrumbs from existing pathname
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return <div className="breadcrumbs">{crumbs}</div>
}
```

## 3.7 How to handle error when loading element?

- Use `useRouteError` hook to get error data from route
- Use `errorElement` prop to handle error element

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

## 3.8 How to handle form data?

- Use `useActionData` hook to get data from route

### 3.8.1 Create function to post API

- Use `ActionFunctionArgs` type for function arguments
- Use `redirect()` method after action done

```js
// src/components/pages/contact/Contact.tsx

import { ActionFunctionArgs, redirect } from 'react-router-dom'

export async function contactAction(args: ActionFunctionArgs<any>) {
  const data = await args.request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  }

  // send your post request

  if (submission.message.length < 10) {
    return { error: 'Message must be over 10 chars long.' }
  }

  return redirect('/')
}
```

### 3.8.2 Use `action` prop to execute function at router

- Add function into `action` prop to handle form action

```js
// src/App.tsx

function App() {
  const careersApi = new CareersApi()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        {/* Nested Route */}
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="contact" element={<Contact />} action={contactAction} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
```

### 3.8.3 Use `useActionData()` hook to get data passed from `<Route />`

```js
// src/components/pages/contact/Contact.tsx

import { useActionData } from 'react-router-dom'

export const Contact: FC<ContactProps> = () => {
  const data: any = useActionData()

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST" action="/help/contact">
        // Your form code

        {data && data?.error && <p>{data?.error}</p>}

        <button>Submit</button>
      </Form>
    </div>
  )
}

```

## 3.9 How to navigate or redirect?

### 3.9.1 `<Navigate />` component

```js
// src/components/pages/about/About.tsx

export const About: FC<AboutProps> = ({ className, ...props }) => {
  const [user, setUser] = useState('Lio')

  if (!user) {
    return <Navigate to={'/'} replace={true} />
  }
  return (
    <div className={clsx('about', className)} {...props}>
      // Your code
    </div>
  )
}
```

### 3.9.2 `redirect` method

```js
// src/components/pages/contact/Contact.tsx


export async function contactAction(args: any) {
  const data = await args.request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  }

  // send your post request

  if (submission.message.length < 10) {
    return { error: 'Message must be over 10 chars long.' }
  }

  return redirect('/')
}
```
