**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What does this boilerplate have?](#12-what-does-this-boilerplate-have)
- [2. How to init Chakra?](#2-how-to-init-chakra)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 main.tsx](#221-maintsx)

# 1. Overview

## 1.1 Resources

- [Chakra UI | Official Document](https://chakra-ui.com/getting-started)
- [Chakra Icons | Official Document](https://chakra-ui.com/docs/components/icon/usage#all-icons)
- [Chakra UI Tutorial | Youtube](https://www.youtube.com/watch?v=iXsM6NkEmFc&list=PL4cUxeGkcC9hcnIeryurNMMcGBHp7AYlP&ab_channel=NetNinja)

## 1.2 What does this boilerplate have?

- [Init project](#21-init-project-with-vite) with Vite
- [Unit test](#3-how-to-setup-test)
- [Eslint & Prettier](#4-how-to-setup-prettier)
- [Husky & lint-staged](#5-how-to-setup-husky--lint-staged)
- Automatically generate file with [Plop](#6-how-to-setup-plop)

# 2. How to init Chakra?

## 2.1 Install library

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @chakra-ui/icons
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
