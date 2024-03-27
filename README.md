**Table of Contents | React Router**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init react-router-dom?](#2-how-to-init-react-router-dom)
  - [2.1 Install library](#21-install-library)
- [3. How to use react-router-dom?](#3-how-to-use-react-router-dom)
  - [3.1 How to create router with `BrowserRouter`?](#31-how-to-create-router-with-browserrouter)
  - [3.2 How to create router in new way with `RouterProvider`?](#32-how-to-create-router-in-new-way-with-routerprovider)
    - [3.2.1 Create RootLayout](#321-create-rootlayout)
    - [3.2.2 Create routes](#322-create-routes)
    - [3.2.3 Create nested routes](#323-create-nested-routes)
    - [3.2.4 How to load data from API before navigating to specific path?](#324-how-to-load-data-from-api-before-navigating-to-specific-path)

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

## 3.1 How to create router with `BrowserRouter`?

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

## 3.2 How to create router in new way with `RouterProvider`?

### 3.2.1 Create RootLayout

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

### 3.2.2 Create routes

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

### 3.2.3 Create nested routes

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

### 3.2.4 How to load data from API before navigating to specific path?

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
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        <Route path="/careers" element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careersApi.getCareers} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}
```
