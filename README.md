**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What does this boilerplate have?](#12-what-does-this-boilerplate-have)
- [2. How to init Vite?](#2-how-to-init-vite)
  - [2.1 Install library](#21-install-library)
- [3. How to use `reactflow`?](#3-how-to-use-reactflow)
  - [3.1 Overview](#31-overview)

# 1. Overview

## 1.1 Resources

- [React Flow | Official Document](https://reactflow.dev/learn/getting-started/installation-and-requirements)

## 1.2 What does this boilerplate have?

- reactflow tutorial

# 2. How to init Vite?

## 2.1 Install library

```bash
npm install reactflow

# or run this to get full template
npx degit xyflow/vite-react-flow-template your-app-name
```

# 3. How to use `reactflow`?

## 3.1 Overview

There are 3 important things:

1. You need to `import the styles`. Otherwise React Flow won't work.
2. The `parent container needs a width and a height`, because React Flow uses its parent dimensions.
3. If you have multiple flows on one page, you need to `pass a unique id prop to each component` to make React Flow work properly.
