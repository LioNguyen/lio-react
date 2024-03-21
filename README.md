**Table of Contents | React Query**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init Vite?](#2-how-to-init-vite)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 .eslintrc.cjs](#221-eslintrccjs)

# 1. Overview

## 1.1 Resources

- [React Query | Official Document](https://tanstack.com/query/latest/docs/framework/react/installation)

## 1.2 What can you learn?

- React Query

# 2. How to init Vite?

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
