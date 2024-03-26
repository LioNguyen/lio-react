**Table of Contents | React Query**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
    - [1.1.1 React Query](#111-react-query)
    - [1.1.2 Zustand](#112-zustand)
    - [1.1.3 Axios](#113-axios)
    - [1.1.4 API](#114-api)
    - [1.1.5 UI](#115-ui)
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
- [5. How to use axios?](#5-how-to-use-axios)
  - [5.1 Create Class to handle all API methods](#51-create-class-to-handle-all-api-methods)
  - [5.2 How to GET?](#52-how-to-get)
    - [5.2.1 Get data from single API](#521-get-data-from-single-api)
      - [5.2.1.1 Method 1](#5211-method-1)
      - [5.2.1.2 Method 2](#5212-method-2)
    - [5.2.2 Get data from multiple APIs](#522-get-data-from-multiple-apis)
      - [5.2.2.1 Method 1](#5221-method-1)
      - [5.2.2.2 Method 2](#5222-method-2)
  - [5.3 How to POST?](#53-how-to-post)
    - [5.3.1 Method 1](#531-method-1)
    - [5.3.2 Method 2](#532-method-2)
  - [5.4 How to create Axios Instance?](#54-how-to-create-axios-instance)
    - [5.4.1 Request Config](#541-request-config)
    - [5.4.2 Response Schema](#542-response-schema)
    - [5.4.3 Interceptors](#543-interceptors)
  - [5.5 How to handle errors?](#55-how-to-handle-errors)
- [6. Case Study](#6-case-study)
  - [6.1 Case 1: Upload image file with upload progress](#61-case-1-upload-image-file-with-upload-progress)
    - [6.1.1 Handle when change input file](#611-handle-when-change-input-file)
    - [6.1.2 Preview image after change input file](#612-preview-image-after-change-input-file)
    - [6.1.3 Handle when click upload file](#613-handle-when-click-upload-file)
  - [6.2 Case 2: Upload multiple image files with upload progress](#62-case-2-upload-multiple-image-files-with-upload-progress)
    - [6.2.1 Handle when change input file](#621-handle-when-change-input-file)
    - [6.2.2 Preview images after change input files](#622-preview-images-after-change-input-files)
    - [6.2.3 Handle when click upload files](#623-handle-when-click-upload-files)
  - [6.3 Case 3: Drag \& Drop file](#63-case-3-drag--drop-file)
    - [6.3.1 Prevent default when drag files, using `onDragOver` prop](#631-prevent-default-when-drag-files-using-ondragover-prop)
    - [6.3.2 Handle dropped files, using `onDrop` prop](#632-handle-dropped-files-using-ondrop-prop)
    - [6.3.3 Create drop zone component with ref](#633-create-drop-zone-component-with-ref)
  - [6.4 Case 4: Download file](#64-case-4-download-file)

# 1. Overview

## 1.1 Resources

### 1.1.1 React Query

- [React Query | Official Document](https://tanstack.com/query/latest/docs/framework/react/installation)
- [React Query V5 Tutorial | Youtube](https://youtu.be/3e-higRXoaM?si=-ETaO107OqGvjhLI)
- [React Query Tutorial | Youtube](https://youtu.be/8K1N3fE-cDs?si=iQpJYHDh20zCstTj)
- [React Query in Class Component | Code Sandbox](https://codesandbox.io/p/sandbox/react-query-with-class-component-jrdy9?file=%2Fsrc%2Fuser-list-direct-client.tsx)

### 1.1.2 Zustand

- [Zustand | Official Document](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [How to use Zustand's persist middleware in Next.js](https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5)

### 1.1.3 Axios

- [Axios | Official Document](https://axios-http.com/vi/docs/intro)
- [Axios Request Config | Official Document](https://axios-http.com/vi/docs/req_config)
- [Axios Handle Error | Official Document](https://axios-http.com/docs/handling_errors)

### 1.1.4 API

- [Fake API | Official Document](https://jsonplaceholder.typicode.com/guide/)
- [Fake API | Example](https://jsonplaceholder.typicode.com/photos?_start=1&_limit=5)

### 1.1.5 UI

- [ChakraUI with react-hook-form | Official Document](https://chakra-ui.com/getting-started/with-hook-form)
- [CSS Loaders](https://cssloaders.github.io/)

## 1.2 What can you learn?

- React Query
- Zustand
- Axios
- Case study to handle data

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

// Directly get data from queryKey for queryFn
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

# 5. How to use axios?

- Use params to filter data in GET request
- Use data to send data in POST, PUT, PATCH request

## 5.1 Create Class to handle all API methods

```js
// src/services/axiosPractice.ts

class AxiosPractice {
  async getData(url: string, config?: AxiosRequestConfig) {
    return axios.get(url, config)
  }
  async postData(url: string, data: any, config?: AxiosRequestConfig) {
    return axios.post(url, data, config)
  }
}

const axiosPractice = new AxiosPractice()
```

## 5.2 How to GET?

### 5.2.1 Get data from single API

#### 5.2.1.1 Method 1

```js
// src/services/axiosPractice.ts

function getUsers() {
  return axiosPractice.getData('/users')
}

try {
  const res = await getUsers()

  console.log(res1.data)
} catch (error) {
  console.log(error)
}
```

#### 5.2.1.2 Method 2

```js
// src/services/axiosPractice.ts

axios({
  method: 'get',
  url: '/users',
  params: { username: 'John Doe' },
}).then((res) => {
  console.log(res.data)
})
```

### 5.2.2 Get data from multiple APIs

```js
// src/services/axiosPractice.ts

function getUsers() {
  return axiosPractice.getData('/users')
}

function getUserDetail(userId: string) {
  return axiosPractice.getData(`/users/${userId}`)
}

function filterUser(username: string) {
  return axiosPractice.getData('/users', {
    params: { username, limit: 5 },
  })
}
```

#### 5.2.2.1 Method 1

```js
// src/services/axiosPractice.ts

try {
  const res1 = await getUsers()
  const res2 = await getUserDetail('74f61ae8-24b5-441f-99d0-85d72aa46c16')
  const res3 = await filterUser('John Doe')

  console.log(res1.data)
  console.log(res2.data)
  console.log(res3.data)
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error)
  } else {
    console.log(error)
  }
}
```

#### 5.2.2.2 Method 2

```js
// src/services/axiosPractice.ts

Promise.all([
  getUsers(),
  getUserDetail('74f61ae8-24b5-441f-99d0-85d72aa46c16'),
  filterUser('John Doe'),
]).then((res) => {
  const [users, userDetailv1, userDetailv2] = res
  console.log(users.data)
  console.log(userDetailv1.data)
  console.log(userDetailv2.data)
})
```

## 5.3 How to POST?

### 5.3.1 Method 1

```js
// src/services/axiosPractice.ts

axiosPractice.postData('/users', {
  id: v4(),
  username: 'John Doe',
})
```

### 5.3.2 Method 2

```js
// src/services/axiosPractice.ts

axios({
  method: 'post',
  url: '/users',
  data: {
    id: v4(),
    username: 'Nghi Nguyen',
  },
})
```

## 5.4 How to create Axios Instance?

```js
// src/services/api.ts

export const createAxios = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 1000,
    // headers: {
    //   Authorization: `Bearer `,
    // },
  })

  return axiosInstance
}
```

### 5.4.1 Request Config

```js
// src/services/api.ts

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,

  // `headers` are custom headers to be sent
  headers: { 'X-Requested-With': 'XMLHttpRequest', Authorization: `Bearer ` },

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  // NOTE: params that are null or undefined are not rendered in the URL.
  params: {
    ID: undefined,
  },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', 'DELETE', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: '',
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 10000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default
})
```

### 5.4.2 Response Schema

```js
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  // As of HTTP/2 status text is blank or unsupported.
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
```

### 5.4.3 Interceptors

```js
// src/services/api.ts

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)
```

## 5.5 How to handle errors?

- Use `axios.isAxiosError()` to check whether it is axios error or not

```js
// src/services/axiosPractice.ts

try {
  await axiosInstance.get('/users-1')
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error)
  } else {
    console.log(error)
  }
}
```

# 6. Case Study

## 6.1 Case 1: Upload image file with upload progress

### 6.1.1 Handle when change input file

```js
// src/components/organisms/upload-file/UploadFile.tsx

const [file, setFile] = useState<File | null>(null)

<Input
  type="file"
  onChange={(e) => e.target.files && setFile(e.target.files[0])}
/>
```

### 6.1.2 Preview image after change input file

- `URL.createObjectURL()` is used to create a URL for image file, browser use memory to store the image file
- therefore, we need to revoke the URL to free up the memory using `URL.revokeObjectURL()`

```js
// src/components/organisms/upload-file/UploadFile.tsx

const [imagePreview, setImagePreview] = useState<string | undefined>()

// Handle image preview
useEffect(() => {
  if (!file || !file.type.includes('image')) {
    setImagePreview(undefined)
    return
  }

  const objectUrl = URL.createObjectURL(file)

  setImagePreview(objectUrl)

  return () => URL.revokeObjectURL(objectUrl)
}, [file])
```

### 6.1.3 Handle when click upload file

- `new FormData()` create files to send to the server

```js
// src/components/organisms/upload-file/UploadFile.tsx

const [progress, setProgress] = useState({
  started: false,
  percent: 0,
})

function onUploadProgress(progressEvent: AxiosProgressEvent) {
  if (progressEvent.total) {
    const percent = Math.round(
      (progressEvent.loaded / progressEvent.total) * 100,
    )
    setProgress((prev) => ({
      ...prev,
      started: true,
      percent,
    }))
  }
}

const onClick = async () => {
  try {
    if (!file) {
      console.log('No file selected')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    await axiosInstance.post('/files', formData, {
      onUploadProgress,
    })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    } else {
      console.log(error)
    }
  } finally {
    setProgress((prev) => ({
      ...prev,
      started: false,
    }))
  }
}
```

## 6.2 Case 2: Upload multiple image files with upload progress

### 6.2.1 Handle when change input file

- The same as case 1
- Use `multiple` prop
- Use `Array.from()` to convert FileList into Array

```js
// src/components/organisms/upload-multiple-files/UploadMultipleFiles.tsx

const [files, setFiles] = useState<any>(null)

<Input
  type="file"
  multiple
  onChange={(e) => e.target.files && setFiles(Array.from(e.target.files))}
/>
```

### 6.2.2 Preview images after change input files

- `URL.createObjectURL()` is used to create a URL for image file, browser use memory to store the image file
- therefore, we need to revoke the URL to free up the memory using `URL.revokeObjectURL()`
- But, `URL.createObjectUrl()` for each item in file list

```js
// src/components/organisms/upload-multiple-files/UploadMultipleFiles.tsx

const [imagePreviews, setImagePreviews] = useState<string[] | undefined>()

// Handle image preview
useEffect(() => {
  if (!files || !files.length) {
    setImagePreviews(undefined)
    return
  }

  const imageUrls: string[] = []
  files.forEach((file: any) => {
    const imageUrl = URL.createObjectURL(file)
    imageUrls.push(imageUrl)
  })

  setImagePreviews(imageUrls)

  return () => {
    imageUrls.forEach((imageUrl) => URL.revokeObjectURL(imageUrl))
  }
}, [files])
```

### 6.2.3 Handle when click upload files

- `new FormData()` create files to send to the server
- Append each item in file list into formData before posting to server

```js
// src/components/organisms/upload-multiple-files/UploadMultipleFiles.tsx

const [progress, setProgress] = useState({
  started: false,
  percent: 0,
})

function onUploadProgress(progressEvent: AxiosProgressEvent) {
  if (progressEvent.total) {
    const percent = Math.round(
      (progressEvent.loaded / progressEvent.total) * 100,
    )
    setProgress((prev) => ({
      ...prev,
      started: true,
      percent,
    }))
  }
}

const onClick = async () => {
  try {
    if (!file) {
      console.log('No file selected')
      return
    }

    const formData = new FormData()
    files.forEach((file: any, index: number) => {
      formData.append(`file${index}`, file)
    })

    await axiosInstance.post('/files', formData, {
      onUploadProgress,
    })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response)
    } else {
      console.log(error)
    }
  } finally {
    setProgress((prev) => ({
      ...prev,
      started: false,
    }))
  }
}
```

## 6.3 Case 3: Drag & Drop file

### 6.3.1 Prevent default when drag files, using `onDragOver` prop

- Create `ref` to add class `drag-over` when drag files into drop zone

```js
// src/components/organisms/drag-drop-file/DragDropFile.tsx

const onDragOver: DragEventHandler<HTMLDivElement> = (event) => {
  event.preventDefault()

  divRef.current?.classList.add('drag-over')
}

```

### 6.3.2 Handle dropped files, using `onDrop` prop

- Remove class `drag-over` when files are dropped
- Get file list from `event.dataTransfer.files` instead `event.target.files` in case 1 & case 2
- Create imageUrl using `URL.createObjectURL()` in this step instead of creating in `useEffect` like the steps above

```js
// src/components/organisms/drag-drop-file/DragDropFile.tsx

const onDrop: DragEventHandler<HTMLDivElement> = (event) => {
  event.preventDefault()

  divRef.current?.classList.remove('drag-over')

  const fileList = Array.from(event.dataTransfer.files).map((file) => {
    const imageUrl = URL.createObjectURL(file)

    return {
      file,
      imageUrl,
    }
  })

  setFiles(fileList)
}
```

### 6.3.3 Create drop zone component with ref

```js
// src/components/organisms/drag-drop-file/DragDropFile.tsx

const divRef = useRef<HTMLDivElement>(null)

// Another code

<Flex
  ref={divRef}
  className="drop-zone"
  onDragOver={onDragOver}
  onDrop={onDrop}
  border="1px dashed gray"
  borderRadius={8}
  justifyContent="center"
  alignItems="center"
  height="250px"
  width="250px"
>
  <Text>Drop image files here</Text>
</Flex>

<Flex gap="5px" maxH="200px">
  {files &&
    files?.map((file: any) => (
      <Image
        key={file.imageUrl}
        src={file.imageUrl}
        flex={1}
        _hover={{ cursor: 'pointer' }}
        onClick={() => onImageClick(file.imageUrl)}
        objectFit={'contain'}
        aspectRatio={1}
      />
    ))}
</Flex>
```

## 6.4 Case 4: Download file

- Use `a` element
- Use `href` prop for download link
- Use `download` prop for download name

```js
// src/components/organisms/download-file/DownloadFile.tsx

<Link href="http://localhost:5173/test_img.jpeg" download="test_img">
  Download Image
</Link>
<Link href="http://localhost:5173/test_pdf.pdf" download="test_pdf">
  Download PDF
</Link>
<Link href="http://localhost:5173/test_excel.xlsx" download="test_excel">
  Download Excel
</Link>
```
