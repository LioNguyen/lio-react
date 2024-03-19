**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init Vite?](#2-how-to-init-vite)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 tsconfig.json](#221-tsconfigjson)

# 1. Overview

## 1.1 Resources

- [React Hook Form - Complete Tutorial (with Zod) | Youtube](https://youtu.be/cc_xmawJ8Kg?si=dfG75BvUGrXU_KCq)
- [React Hook Form - Complete Tutorial (with Zod) | Repo](https://github.com/cosdensolutions/code/tree/master/videos/long/react-hook-form-tutorial)

## 1.2 What can you learn?

- React-hook-form
- Zod

# 2. How to init Vite?

## 2.1 Install library

```bash
npm i react-hook-form
npm i zod @hookform/resolvers
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
