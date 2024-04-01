**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init Reactflow?](#2-how-to-init-reactflow)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 src/App.tsx](#221-srcapptsx)
    - [2.2.2 src/index.css](#222-srcindexcss)
- [3. How to use `reactflow`?](#3-how-to-use-reactflow)
  - [3.1 Overview](#31-overview)
    - [3.1.1 Important](#311-important)
    - [3.1.2 Frequently use](#312-frequently-use)
  - [3.2 How to draw a basic chart?](#32-how-to-draw-a-basic-chart)
  - [3.3 How to create interactivity in chart?](#33-how-to-create-interactivity-in-chart)

# 1. Overview

## 1.1 Resources

- [React Flow | Official Document](https://reactflow.dev/learn/getting-started/installation-and-requirements)
- [Default Node Type | Official Document](https://reactflow.dev/api-reference/types/node#default-node-types)

## 1.2 What can you learn?

- reactflow tutorial

# 2. How to init Reactflow?

## 2.1 Install library

```bash
npm install reactflow

# or run this to get full template
npx degit xyflow/vite-react-flow-template your-app-name
```

## 2.2 Config & Setup

### 2.2.1 src/App.tsx

```js
import 'reactflow/dist/style.css'
```

### 2.2.2 src/index.css

```css
body {
  margin: 0;
}

html,
body,
#root {
  height: 100%;
}
```

# 3. How to use `reactflow`?

## 3.1 Overview

### 3.1.1 Important

There are 3 important things:

1. You need to `import the styles`. Otherwise React Flow won't work.
2. The `parent container needs a width and a height`, because React Flow uses its parent dimensions.
3. If you have multiple flows on one page, you need to `pass a unique id prop to each component` to make React Flow work properly.

### 3.1.2 Frequently use

- Components: `<ReactFlow />, <Background />, <Controls />, <Panel />`
- Methods: `addEdge(), applyEdgeChanges(), applyNodeChanges()`
- Props:
  - `fitView` prop: make sure that the initial node is centered in the view

## 3.2 How to draw a basic chart?

- Create `<ReactFlow />` component to wrap all components
- Use `<Background />, <Controls />` inside
- Use `<Panel />` to render title

```js
// src/components/organisms/lesson-1-basic/Lesson_1.tsx

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {
  const edges: Edge[] = [
    { id: '1', source: '1', target: '2', label: 'to the', type: 'step' },
  ]

  const nodes: Node[] = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Hello' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'World' },
    },
  ]
  return (
    <div className={clsx('lesson-1', className)} {...props}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
        <Panel position="top-left">React Flow Title</Panel>
      </ReactFlow>
    </div>
  )
}
```

```css
/* src/components/organisms/lesson-1-basic/Lesson_1.styles.scss */

.lesson-1 {
  // Height and Weight of parent container is compulsory to render react flow
  height: 100%;
}
```

## 3.3 How to create interactivity in chart?

```js
// src/components/organisms/lesson-2-interactivity/Lesson_2.tsx

const initialEdges: Edge[] = [
  {
    id: '1-2',
    source: '1',
    target: '2',
  },
]

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
]

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  const [edges, setEdges] = useState(initialEdges)
  const [nodes, setNodes] = useState(initialNodes)

  const onConnect = (params: Edge | Connection) => {
    setEdges((eds) => addEdge(params, eds))
  }

  const onEdgeChange = (changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds))
  }

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds))
  }

  return (
    <div className={clsx('lesson-2', className)} {...props}>
      <ReactFlow
        edges={edges}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgeChange}
        onNodesChange={onNodesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

```
