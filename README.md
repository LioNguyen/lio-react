**Table of Contents | React Query**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to setup React Query?](#2-how-to-setup-react-query)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 .eslintrc.cjs](#221-eslintrccjs)
    - [2.2.2 main.tsx](#222-maintsx)
- [3. How to use?](#3-how-to-use)
  - [3.1 How to get data from API with GET method?](#31-how-to-get-data-from-api-with-get-method)
    - [3.1.1 Create function to get API](#311-create-function-to-get-api)
    - [3.1.2 Create hook to get data from API?](#312-create-hook-to-get-data-from-api)
    - [3.1.3 Create hook to get data from multiple API?](#313-create-hook-to-get-data-from-multiple-api)
    - [3.1.4 How to use hook?](#314-how-to-use-hook)
  - [3.2 How to mutate data from API with POST, PATCH, PUT, DELETE method?](#32-how-to-mutate-data-from-api-with-post-patch-put-delete-method)
    - [3.2.1 Create function to handle API](#321-create-function-to-handle-api)
    - [3.2.2 Create function to mutate data](#322-create-function-to-mutate-data)
    - [3.2.3 How to use hook?](#323-how-to-use-hook)

# 1. Overview

## 1.1 Resources

- [React Query | Official Document](https://tanstack.com/query/latest/docs/framework/react/installation)
- [React Query Tutorial V5 Tutorial | Youtube](https://youtu.be/3e-higRXoaM?si=-ETaO107OqGvjhLI)
- [React Query in Class Component | Code Sandbox](https://codesandbox.io/p/sandbox/react-query-with-class-component-jrdy9?file=%2Fsrc%2Fuser-list-direct-client.tsx)
- [Fake API | Official Document](https://jsonplaceholder.typicode.com/guide/)
- [Fake API | Example](https://jsonplaceholder.typicode.com/photos?_start=1&_limit=5)
- [ChakrUI with react-hook-form | Official Document](https://chakra-ui.com/getting-started/with-hook-form)

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

# 3. How to use?

## 3.1 How to get data from API with GET method?

### 3.1.1 Create function to get API

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

### 3.1.2 Create hook to get data from API?

```js
// src/services/users/queries.ts

import { useQuery } from '@tanstack/react-query'
import { UsersApi } from './usersApi'

const userApi = new UsersApi()

export function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
  })
}
```

### 3.1.3 Create hook to get data from multiple API?

```js
// src/services/queries.ts

import { useQueries } from '@tanstack/react-query'
import { getTodo } from './api'

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['todo', { id }],
        queryFn: () => getTodo(id!),
      }
    }),
  })
}
```

### 3.1.4 How to use hook?

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

## 3.2 How to mutate data from API with POST, PATCH, PUT, DELETE method?

### 3.2.1 Create function to handle API

```js
// src/services/users/usersApi.ts

export class UsersApi {
  public async createUser(data: User) {
    await axios.post(USERS_API_ENDPOINT.users, data)
  }
}
```

### 3.2.2 Create function to mutate data

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

### 3.2.3 How to use hook?

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
