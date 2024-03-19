Table of Contents | Next Boilerplate

- [Todo](#todo)
- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What does this boilerplate have?](#12-what-does-this-boilerplate-have)
- [2. How to init NextJS?](#2-how-to-init-nextjs)
- [3. How to setup test?](#3-how-to-setup-test)
  - [3.1 Install library](#31-install-library)
  - [3.2 Config \& Setup](#32-config--setup)
    - [3.2.1 package.json](#321-packagejson)
    - [3.2.2 jest.setup.ts](#322-jestsetupts)
    - [3.2.3 jest.config.ts](#323-jestconfigts)
    - [3.2.4 tsconfig.json](#324-tsconfigjson)
    - [3.2.5 .eslintrc.json](#325-eslintrcjson)
- [4. How to setup Prettier?](#4-how-to-setup-prettier)
  - [4.1 Install library](#41-install-library)
  - [4.2 Config \& Setup](#42-config--setup)
    - [4.2.1 package.json](#421-packagejson)
    - [4.2.2 .eslintrc.cjs](#422-eslintrccjs)
- [5. How to setup Husky \& lint-staged?](#5-how-to-setup-husky--lint-staged)
  - [5.1 Install library](#51-install-library)
  - [5.2 Config \& Setup](#52-config--setup)
    - [5.2.1 package.json](#521-packagejson)
    - [5.2.2 .husky/pre-commit](#522-huskypre-commit)

# Todo

- [ ] Add plop

# 1. Overview

## 1.1 Resources

- [Setup Jest with Next | Official Document](https://nextjs.org/docs/pages/building-your-application/testing/jest)

## 1.2 What does this boilerplate have?

- How to init [NextJS project](#2-how-to-init-nextjs) with Typescript?
- How to setup [Jest and React Testing Library (RTL)](#3-how-to-setup-test) for Next?
- [Eslint & Prettier](#4-how-to-setup-prettier)
- How to setup [Husky & lint-staged](#5-how-to-setup-husky--lint-staged) for Next?

# 2. How to init NextJS?

```bash
npx create-next-app@latest ./  --typescript

yarn
yarn add -D ts-node
```

# 3. How to setup test?

## 3.1 Install library

- `jest`: Unit testing framework
- `jest-environment-jsdom`: DOM environment for running our tests
- `@testing-library/react, @testing-library/jest-dom @testing-library/user-event`: React testing utilities
- `@types/jest ts-jest`: typescript type for jest

```bash
yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest eslint-plugin-jest-dom

# or

npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest eslint-plugin-jest-dom
```

## 3.2 Config & Setup

### 3.2.1 package.json

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
  }
}
```

### 3.2.2 jest.setup.ts

```js
import '@testing-library/jest-dom'
```

### 3.2.3 jest.config.ts

```js
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: "ts-jest",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // ...
    "^@/(.*)$": "<rootDir>/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
```

### 3.2.4 tsconfig.json

```json
{
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "./jest.setup.ts"
  ]
}
```

### 3.2.5 .eslintrc.json

```json
{
  "extends": "plugin:jest-dom/recommended"
}
```

# 4. How to setup Prettier?

## 4.1 Install library

- `eslint-config-prettier`: helps eslint and prettier not conflict

```bash
yarn add -D prettier eslint-config-prettier

# or

npm install --save-dev prettier eslint-config-prettier
```

## 4.2 Config & Setup

### 4.2.1 package.json

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

### 4.2.2 .eslintrc.cjs

```js
module.exports = {
  extends: ['eslint-config-prettier'],
}
```

# 5. How to setup Husky & lint-staged?

## 5.1 Install library

```bash
yarn add -D husky lint-staged
yarn husky init

# or

npm i --save-dev husky lint-staged
npx husky init
```

## 5.2 Config & Setup

### 5.2.1 package.json

```json
{
  "scripts": {
    "postinstall": "husky"
  },
  "lint-staged": {
    "*/**.{ts,tsx}": ["lint"]
  }
}
```

### 5.2.2 .husky/pre-commit

```
yarn lint-staged

# or

npx lint-staged
```
