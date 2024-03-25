import { useCounterStore } from '@/store'

const logCounter = () => {
  const counter = useCounterStore.getState().count
  // useCounterStore.setState({count: 1})

  console.log({ counter })
}

function App() {
  // DO NOT: use like this will render all in store
  // const { count, decreaseCount, increaseCount } = useCounterStore()

  const count = useCounterStore((state) => state.count)
  const decreaseCount = useCounterStore((state) => state.decreaseCount)
  const increaseCount = useCounterStore((state) => state.increaseCount)

  logCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <p>{count}</p>
      <button onClick={decreaseCount}>decreaseCount</button>
      <button onClick={increaseCount}>increaseCount</button>
    </>
  )
}

export default App
