**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What does this boilerplate have?](#12-what-does-this-boilerplate-have)
- [2. How to init Vite?](#2-how-to-init-vite)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 tsconfig.json](#221-tsconfigjson)
    - [2.2.2 vite.config.ts](#222-viteconfigts)
- [3. How to setup test?](#3-how-to-setup-test)
  - [3.1 Install library](#31-install-library)
  - [3.2 Config \& Setup](#32-config--setup)
    - [3.2.1 package.json](#321-packagejson)
    - [3.2.2 vitest.setup.ts](#322-vitestsetupts)
    - [3.2.3 vitest.config.ts](#323-vitestconfigts)
    - [3.2.4 tsconfig.json](#324-tsconfigjson)
    - [3.2.5 .eslintrc.cjs](#325-eslintrccjs)
- [4. How to mock API for debug and test?](#4-how-to-mock-api-for-debug-and-test)
  - [4.1 Install Mock Service Worker (MSW)](#41-install-mock-service-worker-msw)
  - [4.2 Config \& Setup](#42-config--setup)
    - [4.2.1 package.json](#421-packagejson)
    - [4.2.2 src/mocks/handlers.ts](#422-srcmockshandlersts)
    - [4.2.3 src/mocks/node.ts](#423-srcmocksnodets)
    - [4.2.4 src/mocks/browser.ts](#424-srcmocksbrowserts)
    - [4.2.5 vitest.setup.ts](#425-vitestsetupts)
  - [4.3 How to mock API for React App?](#43-how-to-mock-api-for-react-app)
  - [4.4 How to use MSW?](#44-how-to-use-msw)
    - [4.4.1 Test with mock API for all tests](#441-test-with-mock-api-for-all-tests)
    - [4.4.2 Test with mock API for only 1 test](#442-test-with-mock-api-for-only-1-test)
- [5. How to setup Prettier?](#5-how-to-setup-prettier)
  - [5.1 Install library](#51-install-library)
  - [5.2 Config \& Setup](#52-config--setup)
    - [5.2.1 package.json](#521-packagejson)
    - [5.2.2 .eslintrc.cjs](#522-eslintrccjs)
- [6. How to setup Husky \& lint-staged?](#6-how-to-setup-husky--lint-staged)
  - [6.1 Install library](#61-install-library)
  - [6.2 Config \& Setup](#62-config--setup)
    - [6.2.1 package.json](#621-packagejson)
    - [6.2.2 .husky/pre-commit](#622-huskypre-commit)
- [7. How to setup Plop?](#7-how-to-setup-plop)
  - [7.1 Install library](#71-install-library)
  - [7.2 Config \& Setup](#72-config--setup)
    - [7.2.1 package.json](#721-packagejson)
    - [7.2.2 generators/actions/component.mjs](#722-generatorsactionscomponentmjs)
    - [7.2.3 plopfile.mjs](#723-plopfilemjs)
    - [7.2.4 settings.json](#724-settingsjson)
- [8. How to setup Github Action?](#8-how-to-setup-github-action)
  - [8.1 .github/workflows/action.yml](#81-githubworkflowsactionyml)

# 1. Overview

## 1.1 Resources

- [Json Server | Official Document](https://github.com/typicode/json-server)
- [Plop Built-In Helpers | Official Document](https://plopjs.com/documentation/#case-modifiers)

## 1.2 What does this boilerplate have?

- [Init project](#21-init-project-with-vite) with Vite
- [Unit test](#3-how-to-setup-test)
- [Eslint & Prettier](#4-how-to-setup-prettier)
- [Husky & lint-staged](#5-how-to-setup-husky--lint-staged)
- Automatically generate file with [Plop](#6-how-to-setup-plop)

# 2. How to init Vite?

## 2.1 Install library

```bash
npm create vite@latest ./ -- --template react-ts

# Install Vite dependencies
yarn
yarn add -D @types/node
```

## 2.2 Config & Setup

### 2.2.1 tsconfig.json

- Setup path aliases

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 2.2.2 vite.config.ts

- Setup path aliases

```js
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },

  // or
  // resolve: {
  //   alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  // },
})
```

# 3. How to setup test?

## 3.1 Install library

- `vitest`: Unit testing framework
- `jsdom`: DOM environment for running our tests
- `@testing-library/react, @testing-library/jest-dom`: React testing utilities
- `eslint-plugin-jest-dom`: eslint for test

```bash
yarn add -D vitest @vitest/coverage-v8 jsdom @testing-library/react @testing-library/jest-dom eslint-plugin-jest-dom
```

## 3.2 Config & Setup

### 3.2.1 package.json

```json
{
  "scripts": {
    "test": "vitest --run",
    "test:watch": "vitest --root src/",
    "test:coverage": "vitest --watch --coverage"
  }
}
```

### 3.2.2 vitest.setup.ts

```js
import '@testing-library/jest-dom/vitest'
```

### 3.2.3 vitest.config.ts

```js
import * as path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: __dirname,
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
})
```

### 3.2.4 tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
    // Your code
  },
  "include": ["src", "./**/*.ts", "./vitest.setup.ts"]
  // Your code
}
```

### 3.2.5 .eslintrc.cjs

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // eslint for test
    'plugin:jest-dom/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    // Add this plugin to make jest plugin work
    'jest-dom',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

# 4. How to mock API for debug and test?

- **Method 1**: Use `json-server --watch db.json`, check [1.1 Resources](#11-resources)
- **Method 2**: Use MSW

## 4.1 Install Mock Service Worker (MSW)

```bash
yarn add -D msw@latest
yarn msw init ./public

# or

npm install msw@latest --save-dev
npx msw init ./public
```

## 4.2 Config & Setup

### 4.2.1 package.json

```json
{
  "msw": {
    "workerDirectory": ["public"]
  }
}
```

### 4.2.2 src/mocks/handlers.ts

```js
import { http, HttpResponse } from 'msw'

export const handlers = [
  // An example handler
  http.get('/user', () => {
    return HttpResponse.json({ name: 'John Maverick' })
  }),
]
```

### 4.2.3 src/mocks/node.ts

```js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

### 4.2.4 src/mocks/browser.ts

```js
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
```

### 4.2.5 vitest.setup.ts

```js
import '@testing-library/jest-dom/vitest'
import { server } from '@/mocks/node'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
```

## 4.3 How to mock API for React App?

```js
// main.tsx

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('@/mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})
```

## 4.4 How to use MSW?

### 4.4.1 Test with mock API for all tests

```js
// Example

import { render, screen } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { server } from '@/mocks/node'
import { Users } from './Users'

describe('Users test suite', () => {
  function setup() {
    render(<Users />)
  }

  beforeEach(() => {
    setup()
  })

  test('renders a list of user', async () => {
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })
})
```

### 4.4.2 Test with mock API for only 1 test

- Use `HttpResponse` and `http` to create mock API like [4.2.1 src/mocks/handlers.ts](#421-srcmockshandlersts)

```js
// Example

import { render, screen } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { server } from '@/mocks/node'
import { Users } from './Users'

describe('Users test suite', () => {
  function setup() {
    render(<Users />)
  }

  beforeEach(() => {
    setup()
  })

  test('renders error', async () => {
    server.use(
      http.get(import.meta.env.VITE_TEST_URL, () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: 'Something went wrong!',
        })
      }),
    )

    render(<Users />)
    const errorText = await screen.findByText('Error fetching users')
    expect(errorText).toBeInTheDocument()
  })
})
```

# 5. How to setup Prettier?

## 5.1 Install library

- `eslint-config-prettier`: helps eslint and prettier not conflict

```bash
yarn add -D prettier eslint-config-prettier

# or

npm install --save-dev prettier eslint-config-prettier
```

## 5.2 Config & Setup

### 5.2.1 package.json

```json
{
  "scripts": {
    "format": "prettier --ignore-path .gitignore --write \"**/*.{ts,tsx,css,scss}\""
  },
  "lint-staged": {
    "*/**.{ts,tsx}": ["eslint"],
    "*/**.{ts,tsx,css,scss}": ["prettier"]
  }
}
```

### 5.2.2 .eslintrc.cjs

```js
module.exports = {
  extends: ['eslint-config-prettier'],
}
```

# 6. How to setup Husky & lint-staged?

## 6.1 Install library

```bash
yarn add -D husky lint-staged
yarn husky init

# or

npm i --save-dev husky lint-staged
npx husky init
```

## 6.2 Config & Setup

### 6.2.1 package.json

```json
{
  "scripts": {
    "postinstall": "husky"
  },
  "lint-staged": {
    "*/**.{ts,tsx}": ["eslint"]
  }
}
```

### 6.2.2 .husky/pre-commit

```
yarn lint-staged

# or

npx lint-staged
```

# 7. How to setup Plop?

- Check [1.1 Resources](#11-resources)

## 7.1 Install library

```bash
yarn add -D plop
```

## 7.2 Config & Setup

### 7.2.1 package.json

```json
{
  "scripts": {
    "plop": "plop"
  }
}
```

### 7.2.2 generators/actions/component.mjs

```js
const COMPONENT_PATH = 'src/components'
const TEMPLATE_PATH = 'generators/templates'

/** @type {Partial<import('plop').PlopGeneratorConfig>} */
export const componentGenerator = {
  description: 'Generate a component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Please input component name:',
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${COMPONENT_PATH}/{{dashCase componentName}}/{{properCase componentName}}.tsx`,
      templateFile: `${TEMPLATE_PATH}/component.tsx.hbs`,
    },
    {
      type: 'add',
      path: `${COMPONENT_PATH}/{{dashCase componentName}}/{{properCase componentName}}.styles.scss`,
      templateFile: `${TEMPLATE_PATH}/component.styles.scss.hbs`,
    },
  ],
}
```

### 7.2.3 plopfile.mjs

```js
// plopfile.mjs

import { componentGenerator } from './src/plop/actions/index.mjs'

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  // plop generator code
  plop.setGenerator('page', generatorPage)
}
```

### 7.2.4 settings.json

```json
{
  "[handlebars]": { "editor.formatOnSave": false }
}
```

# 8. How to setup Github Action?

## 8.1 .github/workflows/action.yml

```yml
name: CI | Vite Boilerplate

on:
  push:
    branches: ['boilerplate-vite']
  pull_request:
    branches: ['boilerplate-vite']

jobs:
  build:
    # which machine to run on
    runs-on: ubuntu-latest

    # variable
    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    # steps to run
    steps:
      # Checkout branch
      - uses: actions/checkout@v3

      # Install node
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'yarn'

      # Run script
      - run: yarn
      - run: yarn build
      - run: yarn test
```
