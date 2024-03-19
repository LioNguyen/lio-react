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

- [React Router Dom | Official Document](https://reactrouter.com/en/main/start/tutorial)
- [React Router Dom Tutorial | Youtube](https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf&index=2&ab_channel=NetNinja)
- [React Router Dom Tutorial | Repo](https://github.com/iamshaunjp/react-router-in-depth/tree/lesson-1)

## 1.2 What can you learn?

- [Init project](#21-init-project-with-vite) with Vite

# 2. How to init Vite?

## 2.1 Install library

```bash
npm install react-router-dom
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
