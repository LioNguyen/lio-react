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
    - [3.1.1 Create style object for inline style](#311-create-style-object-for-inline-style)
    - [3.1.2 Create custom component with chakra factory](#312-create-custom-component-with-chakra-factory)
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
  - [3.7 Table](#37-table)
    - [3.7.1 Create input data type for table](#371-create-input-data-type-for-table)
    - [3.7.2 Create data and columns for table](#372-create-data-and-columns-for-table)
    - [3.7.3 Create table with `useReactTable()` hook](#373-create-table-with-usereacttable-hook)
- [4. How to custom Chakra theme?](#4-how-to-custom-chakra-theme)
  - [4.1 Create custom colors, fonts or styles](#41-create-custom-colors-fonts-or-styles)
  - [4.2 Create function to extend theme](#42-create-function-to-extend-theme)
  - [4.3 Add custom theme into provider](#43-add-custom-theme-into-provider)
- [5. How to use @tanstack/react-table?](#5-how-to-use-tanstackreact-table)
- [6. Complex @tanstack/react-table](#6-complex-tanstackreact-table)
  - [6.1 Create type \& store](#61-create-type--store)
    - [6.1.1 Re-declare type of table module](#611-re-declare-type-of-table-module)
    - [6.1.2 Create table type](#612-create-table-type)
    - [6.1.3 Create table store](#613-create-table-store)
  - [6.2 Create data and column for table](#62-create-data-and-column-for-table)
    - [6.2.1 Create API service to get data for table](#621-create-api-service-to-get-data-for-table)
    - [6.2.2 Get data using `useQuery()` hook to fetch API](#622-get-data-using-usequery-hook-to-fetch-api)
    - [6.2.3 Create column for table](#623-create-column-for-table)
  - [6.3 Create table](#63-create-table)
    - [6.3.1 Create hook](#631-create-hook)
    - [6.3.2 Create component](#632-create-component)
      - [6.3.2.1 Table Header](#6321-table-header)
      - [6.3.2.2 Table Body](#6322-table-body)

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

### 3.1.1 Create style object for inline style

```js
// src/components/organisms/lesson-1-components-style-props/Lesson_1.tsx

import { SystemStyleObject } from '@chakra-ui/react'

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
    <Container>
      <Box sx={boxStyles}>Hello, Lio!</Box>
    </Container>
  )
}
```

### 3.1.2 Create custom component with chakra factory

- Custom style must be put in `baseStyle` property

```js
// src/components/pages/css-sample/styles.ts

export const ContainerWrapper = chakra(Flex, {
  baseStyle: {
    margin: '15px 0',
    width: 'fit-content',
    // Apply styles to the .box when its parent is hovered and it is not hovered
    '&:hover > .box:not(:hover)': {
      filter: 'blur(5px)',
      transform: 'scale(0.9)',
    },
  },
})
```

## 3.2 Layout

### 3.2.1 Container

```js
// src/components/organisms/lesson-1-components-style-props/Lesson_1.tsx

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {

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

- Default `<Heading />` is `<h2 />`

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
          {/* Your code */}

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

## 3.7 Table

- Integrate `@tanstack/react-table` into `Chakra Table`
- Use [`<TableContainer />`](https://chakra-ui.com/docs/components/table/usage#table-container) to wrap all table
- Use [`<Table />`](https://chakra-ui.com/docs/components/table/usage#table-container) with `variant, colorScheme, and size` props
- Use `<Thead />, <Tbody />, <Tfoot />` for header, body and footer of table
- Use `<Tr />, <Th />, <Td />` for row & cells of each row
- Use `colSpan` prop to **group cells**

```js
const Table = () => {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray" size="md">
        <TableCaption>Imperial to metric conversion factors</TableCaption>

        {/* Table Head */}
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>

        {/* Table Body */}
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>

        {/* Table Foot */}
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
```

### 3.7.1 Create input data type for table

```js
// src/components/organisms/lesson-8-table/index.tsx

interface User {
  id: string
  name: string
  email: string
  country: string
}
```

### 3.7.2 Create data and columns for table

- Data got from API must match type in step 3.7.1
- Use `ColumnDef` to define type for column

```js
// src/components/organisms/lesson-8-table/index.tsx

import { ColumnDef } from '@tanstack/react-table'

const columns: ColumnDef<User, any>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
  {
    accessorKey: 'country',
    header: 'Country',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
]
```

### 3.7.3 Create table with `useReactTable()` hook

- Must have options for `useReactTable()` hook: `columns, data & getCoreRowModel`
- If rendering headers, cells, or footers with **custom** markup, use `flexRender` instead of `cell.getValue()` or `cell.renderValue()`.
- For **table header**: `table.getHeaderGroups()` -> `headers` -> `column.columnDef.header`
- For **table body**: `userTable.getRowModel().rows` -> `getVisibleCells()` -> `column.columnDef.cell` + `cell.getContext()`, using `flexRender()`

```js
// src/components/organisms/lesson-8-table/index.tsx

export const Lesson_8: FC<Lesson_8Props> = ({ className, ...props }) => {
  const [currentRowId, setCurrentRowId] = useState('')

  const userTable = useReactTable({
    columns,
    data: User,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableContainer className={clsx('lesson-8', className)} {...props}>
      <Table
        variant="striped"
        colorScheme="gray"
        size="lg"
      >
        <TableCaption>Table Caption</TableCaption>

        {/* Table Head */}
        <Thead>
          {userTable.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.column.columnDef.header as ReactNode}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        {/* Table Body */}
        <Tbody>
          {userTable.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              _hover={{
                bg: 'teal.50',
                cursor: 'pointer',
              }}
            >
              {row.id === currentRowId ? (
                // Render detail panel if click row
                <Td colSpan={3}>
                  <Flex justifyContent="center" gap={5}>
                    <Button onClick={() => setCurrentRowId('')}>Cancel</Button>
                    <Button>Detail</Button>
                  </Flex>
                </Td>
              ) : (
                // Render table data
                row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} onClick={() => setCurrentRowId(row.id)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))
              )}
            </Tr>
          ))}
        </Tbody>

        {/* Table Foot */}
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
```

# 4. How to custom Chakra theme?

- Create object for each property like `config` or `colors, fonts, styles`
- In `config`, we can setup `initialColorMode` like `light, dark` or `useSystemColorMode`
- Create theme with `extendTheme()` method
- We can create new theme, or override default theme

### 4.1 Create custom colors, fonts or styles

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

### 4.2 Create function to extend theme

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

### 4.3 Add custom theme into provider

```js
// src/main.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
```

# 5. How to use @tanstack/react-table?

# 6. Complex @tanstack/react-table

## 6.1 Create type & store

### 6.1.1 Re-declare type of table module

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

### 6.1.2 Create table type

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

### 6.1.3 Create table store

```js
// src/store/tableStore.ts

import { create } from 'zustand'

import { Status, TableStore } from '@/types'

export const useTableStore = create<TableStore>((set) => ({
  statuses: [],
  createStatus: (statuses: Status[]) => set({ statuses }),
}))
```

## 6.2 Create data and column for table

### 6.2.1 Create API service to get data for table

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

### 6.2.2 Get data using `useQuery()` hook to fetch API

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

### 6.2.3 Create column for table

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

## 6.3 Create table

- Use `useReactTable()` hook
- We can define more method for `meta` property in [Declare type of table module](#411-re-declare-type-of-table-module)

### 6.3.1 Create hook

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

### 6.3.2 Create component

#### 6.3.2.1 Table Header

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

#### 6.3.2.2 Table Body

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
