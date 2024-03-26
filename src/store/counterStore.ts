import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import { createJSONStorage } from 'zustand/middleware'

import { CounterType } from '@/types'

export const useCounterStore = create<CounterType>()(
  persist(
    (set, get) => ({
      count: 0,
      extraCount: 10,
      decreaseCounter() {
        set(() => ({ count: get().count - 1 }))
      },
      increaseCounter() {
        set(() => ({ count: get().count + 1 }))
      },
    }),
    {
      name: 'counter-storage',
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => {
        return Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !['extraCount'].includes(key),
          ),
        )
      },
    },
  ),
)
