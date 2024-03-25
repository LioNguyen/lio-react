import { create } from 'zustand'

type CounterType = {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
}

export const useCounterStore = create<CounterType>((set) => ({
  count: 10,
  decreaseCount: () => {
    set((state) => ({ count: state.count - 1 }))
  },
  increaseCount: () => {
    set((state) => ({ count: state.count + 1 }))
  },
}))
