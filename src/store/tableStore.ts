import { create } from 'zustand'

import { Status, TableStore } from '@/types'

export const useTableStore = create<TableStore>((set) => ({
  statuses: [],
  createStatus: (statuses: Status[]) => set({ statuses }),
}))
