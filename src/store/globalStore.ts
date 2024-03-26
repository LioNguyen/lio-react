import { GlobalType } from '@/types/global'
import { create } from 'zustand'

export const useGlobalStore = create<GlobalType>((set) => ({
  isLoading: false,
  hideLoading: () => set(() => ({ isLoading: false })),
  showLoading() {
    set(() => ({ isLoading: true }))
  },
}))
