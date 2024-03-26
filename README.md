**Table of Contents | React Query**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
    - [1.1 React Query](#11-react-query)
    - [1.2 Zustand](#12-zustand)
    - [1.3 API](#13-api)
    - [1.4 UI](#14-ui)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to setup?](#2-how-to-setup)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 .eslintrc.cjs](#221-eslintrccjs)
    - [2.2.2 main.tsx](#222-maintsx)
- [3. How to use React Query?](#3-how-to-use-react-query)
  - [3.1 Overview](#31-overview)
  - [3.2 How to get data from API with GET method?](#32-how-to-get-data-from-api-with-get-method)
    - [3.2.1 Create function to get API](#321-create-function-to-get-api)
    - [3.2.2 Create useQuery hook to get data from API?](#322-create-usequery-hook-to-get-data-from-api)
      - [3.2.2.1 Example](#3221-example)
      - [3.2.2.2 Multiple ways to use useQuery](#3222-multiple-ways-to-use-usequery)
      - [3.2.2.3 How to get parameters from `queryFn`?](#3223-how-to-get-parameters-from-queryfn)
    - [3.2.3 Create useQueries hook for Dynamic Parallel Queries?](#323-create-usequeries-hook-for-dynamic-parallel-queries)
    - [3.2.4 How to use hook in component?](#324-how-to-use-hook-in-component)
  - [3.3 How to mutate data from API with POST, PATCH, PUT, DELETE method?](#33-how-to-mutate-data-from-api-with-post-patch-put-delete-method)
    - [3.3.1 Create function to handle API](#331-create-function-to-handle-api)
    - [3.3.2 Create function to mutate data](#332-create-function-to-mutate-data)
    - [3.3.3 How to use hook in component?](#333-how-to-use-hook-in-component)
- [4. How to use Zustand?](#4-how-to-use-zustand)
  - [4.1 Create store](#41-create-store)
    - [4.1.1 Basic store](#411-basic-store)
    - [4.1.2 Store with persist \& createJSONStorage middleware](#412-store-with-persist--createjsonstorage-middleware)
  - [4.2 How to use zustand?](#42-how-to-use-zustand)
    - [4.2.1 Use as hook](#421-use-as-hook)
    - [4.2.2 Use without hook](#422-use-without-hook)

# 1. Overview

## 1.1 Resources

### 1.1 React Query

- [React Query | Official Document](https://tanstack.com/query/latest/docs/framework/react/installation)
- [React Query V5 Tutorial | Youtube](https://youtu.be/3e-higRXoaM?si=-ETaO107OqGvjhLI)
- [React Query Tutorial | Youtube](https://youtu.be/8K1N3fE-cDs?si=iQpJYHDh20zCstTj)
- [React Query in Class Component | Code Sandbox](https://codesandbox.io/p/sandbox/react-query-with-class-component-jrdy9?file=%2Fsrc%2Fuser-list-direct-client.tsx)

### 1.2 Zustand

- [Zustand | Official Document](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [How to use Zustand's persist middleware in Next.js](https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5)

### 1.3 API

- [Fake API | Official Document](https://jsonplaceholder.typicode.com/guide/)
- [Fake API | Example](https://jsonplaceholder.typicode.com/photos?_start=1&_limit=5)

### 1.4 UI

- [ChakrUI with react-hook-form | Official Document](https://chakra-ui.com/getting-started/with-hook-form)
- [CSS Loaders](https://cssloaders.github.io/)

## 1.2 What can you learn?

- React Query
- Zustand

# 2. How to setup?

## 2.1 Install library

```bash
yarn add @tanstack/react-query @tanstack/react-query-devtools
yarn add -D @tanstack/eslint-plugin-query

yarn add zustand
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

# 3. How to use React Query?

## 3.1 Overview

- The `status` gives information about the data: Do we have any or not?
- The `fetchStatus` gives information about the queryFn: Is it running or not?
- `staleTime` là một tùy chọn được sử dụng để định cấu hình thời gian mà dữ liệu được coi là "lỗi thời" (stale). Khi dữ liệu trở nên lỗi thời, React Query sẽ bắt đầu tải dữ liệu mới từ nguồn.

## 3.2 How to get data from API with GET method?

### 3.2.1 Create function to get API

```js
// src/services/users/usersApi.ts

export class UsersApi {
  public async getUsers() {
    const res = await axios.get<User[]>(USERS_API_ENDPOINT.users)

    return res.data
  }
  public async createUser(data: User) {
    await axios.post(USERS_API_ENDPOINT.users, data)
  }
}
```

### 3.2.2 Create useQuery hook to get data from API?

#### 3.2.2.1 Example

```js
// src/services/users/queries.ts

import { useQuery } from '@tanstack/react-query'
import { UsersApi } from './usersApi'

const userApi = new UsersApi()

export function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,

    // Toggle query
    enabled,

    // Modify data returned
    select: (user) => (enabled ? user : []),

    // Khi dữ liệu trở nên lỗi thời (stale), React Query sẽ bắt đầu tải dữ liệu mới từ nguồn.
    // Infinity sẽ làm query không bao giờ lỗi thời (stale)
    staleTime: Infinity,
  })
}
```

#### 3.2.2.2 Multiple ways to use useQuery

```js
useQuery({ queryKey: ['todos'], queryFn: fetchAllTodos })
useQuery({ queryKey: ['todos', todoId], queryFn: () => fetchTodoById(todoId) })
useQuery({
  queryKey: ['todos', todoId],
  queryFn: async () => {
    const data = await fetchTodoById(todoId)
    return data
  },
})
useQuery({
  queryKey: ['todos', todoId],
  queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),
})
```

#### 3.2.2.3 How to get parameters from `queryFn`?

```js
function Todos({ status, page }) {
  const result = useQuery({
    queryKey: ['todos', { status, page }],
    queryFn: fetchTodoList,
  })
}

// Access the key, status and page variables in your query function!
function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey
  return new Promise()
}
```

### 3.2.3 Create useQueries hook for Dynamic Parallel Queries?

```js
function App({ users }) {
  const userQueries = useQueries({
    queries: users.map((user) => {
      return {
        queryKey: ['user', user.id],
        queryFn: () => fetchUserById(user.id),
      }
    }),
  })
}
```

### 3.2.4 How to use hook in component?

```js
// src/components/organisms/users/Users.tsx

export const Users: FC<UsersProps> = ({ className, ...props }) => {
  const { data, isLoading } = useGetUsers()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <div className={clsx('users', className)} {...props}>
      <h1>Users</h1>
      <UserForm />
      {(data ?? []).map((user: any) => (
        <UserCard key={user.id} email={user.email} username={user.username} />
      ))}
    </div>
  )
}
```

## 3.3 How to mutate data from API with POST, PATCH, PUT, DELETE method?

### 3.3.1 Create function to handle API

```js
// src/services/users/usersApi.ts

export class UsersApi {
  public async createUser(data: User) {
    await axios.post(USERS_API_ENDPOINT.users, data)
  }
}
```

### 3.3.2 Create function to mutate data

```js
// src/services/users/mutations.ts

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: User) => userApi.createUser(data),

    // After post new user, refetch to get new user list
    onSettled: async (_, error) => {
      if (error) {
        // your code
      } else {
        await queryClient.invalidateQueries({ queryKey: ['users'] })
      }
    },
  })
}
```

### 3.3.3 How to use hook in component?

```js
// src/components/molecules/user-form/UserForm.tsx

export const UserForm: FC<UserFormProps> = ({ className, ...props }) => {
  const { handleSubmit, register } = useForm()
  const createUser = useCreateUser()

  const onSubmit = (values: FieldValues) => {
    const { username, firstName, lastName, email } = values

    createUser.mutate({ id: uuidv4(), username, firstName, lastName, email })
  }

  return (
    <form className={clsx('form', className)} onSubmit={handleSubmit(onSubmit)}>
      <FormControl {...props}>
        <Input id="username" placeholder="username" {...register('username')} />
        <Input
          id="firstName"
          placeholder="First name"
          {...register('firstName')}
        />
        <Input
          id="lastName"
          placeholder="Last name"
          {...register('lastName')}
        />
        <Input id="email" placeholder="email" {...register('email')} />
        <Button mt={4} colorScheme="teal" isLoading={false} type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  )
}
```

# 4. How to use Zustand?

- Slice is a piece of state

## 4.1 Create store

### 4.1.1 Basic store

```js
// src/store/globalStore.ts

import { GlobalType } from '@/types/global'
import { create } from 'zustand'

export const useGlobalStore =
  create <
  GlobalType >
  ((set) => ({
    isLoading: false,
    hideLoading: () => set(() => ({ isLoading: false })),
    showLoading() {
      set(() => ({ isLoading: true }))
    },
  }))
```

### 4.1.2 Store with persist & createJSONStorage middleware

```js
// src/store/counterStore.ts

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { CounterType } from '@/types'

export const useCounterStore = create<CounterType>()(
  persist(
    (set, get) => ({
      count: 0,
      extraCount: 10,
      decreaseCounter() {
        set(() => ({ count: get().count - 1 }))
      },
      increaseCounter() {
        set(() => ({ count: get().count + 1 }))
      },
    }),
    {
      name: 'counter-storage',
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used

      // This setup will store part of state in storage
      partialize: (state) => {
        return Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !['extraCount'].includes(key),
          ),
        )
      },
    },
  ),
)

```

## 4.2 How to use zustand?

### 4.2.1 Use as hook

```js
// src/components/organisms/users/Users.tsx

export const Users: FC<UsersProps> = ({ className, ...props }) => {
  const { data, isLoading } = useGetUsers()
  const { showLoading, hideLoading } = useGlobalStore()

  useEffect(() => {
    if (isLoading) {
      return showLoading()
    } else {
      setTimeout(() => {
        hideLoading()
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <div className={clsx('users', className)} {...props}>
      <h1>Users</h1>
      <UserForm />
      {(data ?? []).map((user: any) => (
        <UserCard key={user.id} email={user.email} username={user.username} />
      ))}
    </div>
  )
}
```

### 4.2.2 Use without hook

```js
function getGlobalState() {
  const isLoading = useGlobalStore.getState().isLoading
  const showLoading = useGlobalStore.getState().showLoading
  const hideLoading = useGlobalStore.getState().hideLoading
}
```
