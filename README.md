**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init?](#2-how-to-init)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 main.tsx](#221-maintsx)
- [3. How to use Chakra?](#3-how-to-use-chakra)
  - [3.1 How to style?](#31-how-to-style)
    - [3.1.1 Create style object](#311-create-style-object)
  - [3.2 Layout](#32-layout)
    - [3.2.1 Container](#321-container)
    - [3.2.2 Flex](#322-flex)
    - [3.2.3 Grid](#323-grid)
    - [3.2.4 Simple Grid](#324-simple-grid)
  - [3.3 Typography](#33-typography)
  - [3.4 Components](#34-components)
    - [3.4.1 Button](#341-button)
    - [3.4.2 Card](#342-card)
    - [3.4.3 List](#343-list)
    - [3.4.4 Tabs](#344-tabs)
    - [3.4.5 Form](#345-form)
  - [3.5 Toast](#35-toast)
    - [3.5.1 Use toast in function component](#351-use-toast-in-function-component)
    - [3.5.2 Use toast outside component](#352-use-toast-outside-component)
  - [3.6 Avatar](#36-avatar)
  - [3.7. How to custom theme?](#37-how-to-custom-theme)
    - [3.7.1 Create custom colors, fonts or styles](#371-create-custom-colors-fonts-or-styles)
    - [3.7.2 Create function to extend theme](#372-create-function-to-extend-theme)
    - [3.7.3 Add custom theme into provider](#373-add-custom-theme-into-provider)
- [4. How to use @tanstack/react-table?](#4-how-to-use-tanstackreact-table)
  - [4.1 Create type \& store](#41-create-type--store)
    - [4.1.1 Re-declare type of table module](#411-re-declare-type-of-table-module)
    - [4.1.2 Create table type](#412-create-table-type)
    - [4.1.3 Create table store](#413-create-table-store)
  - [4.2 Create data and column for table](#42-create-data-and-column-for-table)
    - [4.2.1 Create API service to get data for table](#421-create-api-service-to-get-data-for-table)
    - [4.2.2 Get data using `useQuery()` hook to fetch API](#422-get-data-using-usequery-hook-to-fetch-api)
    - [4.2.3 Create column for table](#423-create-column-for-table)
  - [4.3 Create table](#43-create-table)
    - [4.3.1 Create hook](#431-create-hook)
    - [4.3.2 Create component](#432-create-component)
      - [4.3.2.1 Table Header](#4321-table-header)
      - [4.3.2.2 Table Body](#4322-table-body)

# 1. Overview

## 1.1 Resources

- [Chakra UI | Official Document](https://chakra-ui.com/getting-started)
- [Chakra UI Default Theme | Official Document](https://chakra-ui.com/docs/styled-system/theme)
- [Chakra Icons | Official Document](https://chakra-ui.com/docs/components/icon/usage#all-icons)
- [Chakra Toast | Official Document](https://chakra-ui.com/docs/components/toast/usage#standalone-toasts)
- [Chakra UI Tutorial | Youtube](https://www.youtube.com/watch?v=iXsM6NkEmFc&list=PL4cUxeGkcC9hcnIeryurNMMcGBHp7AYlP&ab_channel=NetNinja)
- [TanStack Table Tutorial | Youtube](https://youtu.be/CjqG277Hmgg?si=Xzw8ARrivdji4_g3)

## 1.2 What can you learn?

- Chakra UI
- @tanstack/react-table

# 2. How to init?

## 2.1 Install library

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @chakra-ui/icons

npm install @tanstack/react-table
```

## 2.2 Config & Setup

### 2.2.1 main.tsx

- Create provider

```js
// src/main.tsx

import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import '@/index.scss'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)

```

# 3. How to use Chakra?

## 3.1 How to style?

### 3.1.1 Create style object

```js
import { SystemStyleObject } from '@chakra-ui/react'

  const boxStyles: SystemStyleObject = {
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    p: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    },
  }
```

## 3.2 Layout

### 3.2.1 Container

```js
// src/components/organisms/lesson-1-components-style-props/Lesson_1.tsx

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {
  const boxStyles: SystemStyleObject = {
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    p: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    },
  }

  return (
    <Container
      className={clsx('lesson-1', className)}
      as="section"
      maxW="4xl"
      py="20px"
      {...props}
    >
      {/* Default heading is h2 */}
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>

      <Box bg="orange" my="30px" p="20px">
        <Text color="white">This is a box</Text>
      </Box>
    </Container>
  )
}
```

### 3.2.2 Flex

- Use `<Flex />, <HStack />, <VStack />` for flex layout
- Can use `<Spacer />` instead of `gap prop`

```js
// src/components/organisms/lesson-2-flex-layouts/Lesson_2.tsx

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  return (
    <Flex
      className={clsx('lesson-2', className)}
      bg="gray.200"
      justify="space-between"
      alignItems="center"
      gap="2"
      wrap="wrap"
      {...props}
    >
      <Box width="150px" height="50px" bg="red">
        1
      </Box>
      <Box width="150px" height="50px" bg="blue">
        2
      </Box>

      {/* Create space between element */}
      <Spacer />

      <Box width="150px" height="50px" bg="green" flexGrow="1">
        3
      </Box>
      <Button colorScheme="red">Sign out</Button>
    </Flex>
  )
}
```

### 3.2.3 Grid

- Use `<Grid />, <GridItem />` component
- Some frequently props: `templateColumns`

```js
// src/components/templates/root-layout/RootLayout.tsx

export const RootLayout: FC<RootLayoutProps> = ({ className, ...props }) => {
  return (
    <Grid
      className={clsx('root-layout', className)}
      templateColumns="repeat(6,1fr)"
      {...props}
    >
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minH={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
```

### 3.2.4 Simple Grid

- Use `<SimpleGrid />` component
- Some frequently props: `columns, spacing, minChildWidth`

```js
// src/components/organisms/lesson-3-grid-layouts/Lesson_3.tsx

export const Lesson_3: FC<Lesson_3Props> = ({ className, ...props }) => {
  return (
    <SimpleGrid
      className={clsx('lesson-3', className)}
      columns={4}
      spacing={10}
      minChildWidth={'250px'}
      {...props}
    >
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>

      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>

      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
      <Box bg="white" border="1px solid" h="200px"></Box>
    </SimpleGrid>
  )
}
```

## 3.3 Typography

```js
import { Heading, Text } from '@chakra-ui/react'

<Heading as="h1">Dojo Task</Heading>
<Heading my="30px" p="10px">
  Chakra UI Components
</Heading>

<Text ml="30px">Lorem ipsum</Text>
```

## 3.4 Components

### 3.4.1 Button

```js
<Button colorScheme="purple">Logout</Button>
```

### 3.4.2 Card

- Use `<Card />` to wrap all card components
- Use `<CardHeader />, <CardBody />, <CardFooter />` for card item

```js
// src/components/organisms/lesson-5-card/Lesson_5.tsx

<Card>
  <CardHeader></CardHeader>
  <CardBody></CardBody>
  <CardFooter></CardFooter>
</Card>
```

### 3.4.3 List

- Use `<List />` to wrap all list components
- Use `<ListItem />, <ListIcon />` for list item

```js
// src/components/organisms/lesson-4-list/Lesson_4.tsx

<List>
  <ListItem>
    <NavLink to="/">
      <ListIcon as={CalendarIcon} color="white" />
      Dashboard
    </NavLink>
  </ListItem>
  <ListItem>
    <NavLink to="/create">
      <ListIcon as={EditIcon} color="white" />
      New task
    </NavLink>
  </ListItem>
  <ListItem>
    <NavLink to="/profile">
      <ListIcon as={AtSignIcon} color="white" />
      Profile
    </NavLink>
  </ListItem>
</List>
```

### 3.4.4 Tabs

- Use `<Tabs />` to wrap all tab components
- Use `<TabList />, <Tab />` for tab title, props: `_selected`
- Use `<TabPanels />, <TabPanel />` for tab content

```js
// src/components/organisms/lesson-6-tabs/Lesson_6.tsx

<Tabs
  className={clsx('lesson-6', className)}
  mt="40px"
  p="20px"
  colorScheme="purple"
  variant={'enclosed'}
  {...props}
>
  <TabList>
    <Tab _selected={{ bg: 'purple.400', color: 'white' }}>Account Info</Tab>
    <Tab _selected={{ bg: 'purple.400', color: 'white' }}>Task History</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>Content of tab Account Info</TabPanel>
    <TabPanel>Content of tab Task History</TabPanel>
  </TabPanels>
</Tabs>
```

### 3.4.5 Form

- Use `<FormControl />` to wrap all form components, props: `isRequired`
- Use `<FormLabel />, <FormHelperText />` to show label and help text
- The other component is form like `<Input />, <TextArea />, <Checkbox />`

```js
// src/components/organisms/lesson-7-form/Lesson_7.tsx

<Form className={clsx('lesson-7')} method="POST" action="/create" {...props}>
  <FormControl mb="40px" isRequired>
    <FormLabel>Task name:</FormLabel>
    <Input name="title" type="text" />
    <FormHelperText>Enter a descriptive task name.</FormHelperText>
  </FormControl>

  <FormControl mb="40px">
    <FormLabel>Task description:</FormLabel>
    <Textarea
      name="description"
      placeholder="Enter a detailed description for the task..."
    />
  </FormControl>

  <FormControl mb="40px" display="flex" alignItems="center">
    <Checkbox name="isPriority" size="lg" colorScheme={'purple'} />
    <FormLabel ml="10px" mb="0">
      Make this a priority task.
    </FormLabel>
  </FormControl>

  <Button type="submit">Submit</Button>
</Form>
```

## 3.5 Toast

### 3.5.1 Use toast in function component

- Use `useToast()` hook

```js
// src/components/organisms/navbar/Navbar.tsx

export const Navbar: FC<NavbarProps> = () => {
  const toast = useToast()

  const showToast = () => {
    toast({
      status: 'success',
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      position: 'bottom-right',
      icon: <UnlockIcon />,
    })
  }

  return (
    <>
      <Flex p="10px" alignItems="center">
          // Your code

          <Button colorScheme="purple" onClick={showToast}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </>
  )
}
```

### 3.5.2 Use toast outside component

- [1.1 Resources](#11-resources)

```js
import * as ReactDOM from 'react-dom/client'
import { createStandaloneToast } from '@chakra-ui/react'

const { ToastContainer, toast } = createStandaloneToast()

// render the ToastContainer in your React root
const rootElement = document.getElementById('root')
ReactDOM.createRoot(yourRootElement).render(
  <>
    <App />
    <ToastContainer />
  </>,
)

toast({
  title: 'An error occurred.',
  description: 'Unable to create user account.',
  status: 'error',
  duration: 9000,
  isClosable: true,
})
```

## 3.6 Avatar

- If image url is invalid, `<Avatar />` component will show default image, with 1st letter of name (if any)
- Use `<AvatarBadge />` to show small icon on the right bottom corner of `<Avatar />`

```js
// src/components/organisms/lesson-5-card/Lesson_5.tsx

<Avatar name={task.author} src={task.img} />
```

```js
// src/components/organisms/navbar/Navbar.tsx

<Avatar name="Mario" src="/img/mario.png">
  <AvatarBadge bg="teal" width="1.3em">
    <Text color="white" fontSize="xs">
      3
    </Text>
  </AvatarBadge>
</Avatar>
```

## 3.7. How to custom theme?

- Create object for each property like `config` or `colors, fonts, styles`
- In `config`, we can setup `initialColorMode` like `light, dark` or `useSystemColorMode`
- Create theme with `extendTheme()` method
- We can create new theme, or override default theme

### 3.7.1 Create custom colors, fonts or styles

```js
// src/theme/styles.ts

const colors = {
  // Create new color
  brand: {
    900: '#024fc9',
    800: '#0a69ff',
    700: '#0f7cff',
    600: '#1a8fff',
    500: '#2b98ff',
  },
}

const fonts = {
  // Override default font
  body: 'Tahoma',
  heading: 'Courier New',

  // Create new font
  main: 'Menlo, monospace',
}

const styles = {
  global: {
    'html, body': {
      // backgroundColor: 'gray.900',
      // color: 'whiteAlpha.800',
    },
  },
}
```

### 3.7.2 Create function to extend theme

```js
// src/theme/index.ts

import { extendTheme } from '@chakra-ui/react'
import { colors, fonts, styles } from './styles'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  colors,
  fonts,
  styles,
  config,
})

export default theme
```

### 3.7.3 Add custom theme into provider

```js
// src/main.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
```

# 4. How to use @tanstack/react-table?

## 4.1 Create type & store

### 4.1.1 Re-declare type of table module

- This file is used to extend the types of react-table
- Must re-export type RowData as the same as default export from react-table to make the module '@tanstack/table-core' extension works

```js
// src/types/react-table.d.ts

export type RowData = unknown | object | any[]
declare module '@tanstack/table-core' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: any) => void
  }
}
```

### 4.1.2 Create table type

```js
// src/types/table.ts

export interface TableDatum {
  task: string
  status: Status
  due: null | string
  notes: string
}

export interface Status {
  id: number
  code: string
  name: string
  color: string
}

export interface TableStore {
  statuses: Status[]
  createStatus: (statuses: Status[]) => void
}
```

### 4.1.3 Create table store

```js
// src/store/tableStore.ts

import { create } from 'zustand'

import { Status, TableStore } from '@/types'

export const useTableStore = create<TableStore>((set) => ({
  statuses: [],
  createStatus: (statuses: Status[]) => set({ statuses }),
}))
```

## 4.2 Create data and column for table

### 4.2.1 Create API service to get data for table

```js
// src/services/tableApi.ts

export class TableApi {
  async getTableData() {
    const res = await axios.get(TABLE_DATA_API_ENDPOINT.tableData)

    return res.data
  }
  async getStatuses() {
    const res = await axios.get<Status[]>(TABLE_DATA_API_ENDPOINT.statuses)

    return res.data
  }
}
```

### 4.2.2 Get data using `useQuery()` hook to fetch API

```js
// src/components/pages/table/index.tsx

const { data: tableData } = useQuery({
  queryKey: ['tableData'],
  queryFn: tableApi.getTableData,
})
const { data: statuses } = useQuery<Status[]>({
  queryKey: ['statuses'],
  queryFn: tableApi.getStatuses,
})

// Handle data and statuses before rendering table
const data = useMemo(() => {
  if (!tableData || !statuses) return null

  return tableData.map((data: any) => ({
    ...data,
    status: statuses.find((status) => status.code === data.status),
  }))
}, [tableData, statuses])
```

### 4.2.3 Create column for table

- Use `ColumnDef` type
- Colum item includes: `accessorKey, header, cell`

```js
// src/components/pages/table/index.tsx

const columns: ColumnDef<TableDatum, unknown>[] = [
  {
    accessorKey: 'task',
    header: 'Task',
    size: 225,
    cell: EditableCell,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: StatusCell,
  },
  {
    accessorKey: 'due',
    header: 'Due',
    cell: (props) => <div>{props.getValue() as string}</div>,
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: (props) => <div>{props.getValue() as string}</div>,
  },
]
```

## 4.3 Create table

- Use `useReactTable()` hook
- We can define more method for `meta` property in [Declare type of table module](#411-re-declare-type-of-table-module)

### 4.3.1 Create hook

```js
// src/components/organisms/task-table/index.tsx

const table = useReactTable({
  data: tableData,
  columns,
  getCoreRowModel: getCoreRowModel(),
  columnResizeMode: 'onChange',
  meta: {
    updateData: (rowIndex, columnId, value) => {
      setTableData((prev: any) =>
        prev.map((row: any, index: number) =>
          index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row,
        ),
      )
    },
  },
})
```

### 4.3.2 Create component

#### 4.3.2.1 Table Header

- Use `table.getHeaderGroups()` -> `headers` in each header group -> `column.columnDef.header` in each header

```js
// // src/components/organisms/task-table/index.tsx

<Box className="table">
  {table.getHeaderGroups().map((headerGroup) => (
    <Box className="tr" key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <Box className="th" key={header.id} w={header.getSize()}>
          {header.column.columnDef.header as string}
          <Box
            className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
          />
        </Box>
      ))}
    </Box>
  ))}
</Box>
```

#### 4.3.2.2 Table Body

- Use `table.getRowModel().rows` -> `row.getVisibleCells()` in each row -> `column.columnDef.cell` in each cell
- Use `flexRender()` method to render data in table body

```js
// // src/components/organisms/task-table/index.tsx

<Box className="table">
  {(table.getRowModel().rows || []).map((row) => (
    <Box className="tr" key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <Box className="td" key={cell.id} w={cell.column.getSize()}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Box>
      ))}
    </Box>
  ))}
</Box>
```
