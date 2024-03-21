**Table of Contents | React Query**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to setup React Query?](#2-how-to-setup-react-query)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 .eslintrc.cjs](#221-eslintrccjs)
    - [2.2.2 main.tsx](#222-maintsx)

# 1. Overview

## 1.1 Resources

- [React Query | Official Document](https://tanstack.com/query/latest/docs/framework/react/installation)
- [React Query Tutorial V5 Tutorial | Youtube](https://youtu.be/3e-higRXoaM?si=-ETaO107OqGvjhLI)

## 1.2 What can you learn?

- React Query

# 2. How to setup React Query?

## 2.1 Install library

```bash
yarn add @tanstack/react-query @tanstack/react-query-devtools
yarn add -D @tanstack/eslint-plugin-query
```

## 2.2 Config & Setup

### 2.2.1 .eslintrc.cjs

```js
module.exports = {
  extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
}
```

### 2.2.2 main.tsx

```js
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
```
