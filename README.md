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
- [Fake API | Official Document](https://jsonplaceholder.typicode.com/guide/)
- [Fake API | Example](https://jsonplaceholder.typicode.com/photos?_start=1&_limit=5)

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
// src/services/api.ts

export const getTodosIds = async () => {
  const res = await createAxios().get<TodoType[]>(API_END_POINT.TODOS, {
    params: {
      _start: 0,
      _limit: 10,
    },
  })

  return res.data.map((todo) => todo.id)
}

export const getTodo = async (id: number) => {
  const res = await createAxios().get<TodoType>(`${API_END_POINT.TODOS}/${id}`)

  return res.data
}
```

### 3.1.2 Create hook to get data from API?

```js
// src/services/queries.ts

import { useQueries, useQuery } from '@tanstack/react-query'
import { getTodosIds } from './api'

export function useTodoIds() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodosIds,
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
// src/components/todo/Todo.tsx

export const Todo: FC<TodoProps> = ({ className, ...props }) => {
  const globalFetching = useIsFetching()
  const {
    data: idList,
    fetchStatus,
    isFetching,
    isError,
    status,
  } = useTodoIds()
  const todosQueries = useTodos(idList)

  if (isFetching) {
    return <span>Fetching...</span>
  }

  if (isError) {
    return <span>There is an error</span>
  }

  return (
    <div className={clsx('todo', className)} {...props}>
      // Your code
    </div>
  )
}
```

## 3.2 How to mutate data from API with POST, PATCH, PUT, DELETE method?

### 3.2.1 Create function to handle API

```js
// src/services/api.ts

export const createTodo = async (data: TodoType) => {
  await createAxios().post(API_END_POINT.TODOS, data)
}
```

### 3.2.2 Create function to mutate data

```js
// src/services/mutations.ts

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createTodo } from './api'
import { TodoType } from '@/types'

export function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TodoType) => createTodo(data),
    onMutate: console.log,
    onSuccess: console.log,
    onError: console.log,

    // This property indicates actions after mutating data is completed
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: ['todos'] })
      }
    },
  })
}
```

### 3.2.3 How to use hook?

```js
// src/components/todo/Todo.tsx

export const Todo: FC<TodoProps> = ({ className, ...props }) => {
  const createTodoMutation = useCreateTodo()

  const { register, handleSubmit } = useForm<TodoType>()

  const handleCreateTodoSubmit: SubmitHandler<TodoType> = (data) => {
    createTodoMutation.mutate(data)
  }


  return (
    <div className={clsx('todo', className)} {...props} onClick={handleCreateTodoSubmit}>
      // Your code
    </div>
  )
}
```
