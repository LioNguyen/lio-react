import { useMutation, useQueryClient } from '@tanstack/react-query'

import { UserType } from '@/types'
import { UsersApi } from './usersApi'
import { useGlobalStore } from '@/store/globalStore'

const userApi = new UsersApi()

export function useCreateUser() {
  const { showLoading, hideLoading } = useGlobalStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UserType) => userApi.createUser(data),
    onMutate: showLoading,
    onSettled: async (_, error) => {
      setTimeout(() => {
        hideLoading()
      }, 1000)
      if (error) {
        // your code
      } else {
        await queryClient.invalidateQueries({ queryKey: ['users'] })
      }
    },
  })
}

export function useDeleteUser() {
  const { showLoading, hideLoading } = useGlobalStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => userApi.deleteUser(id),
    onMutate: showLoading,
    onSettled: async (_, error) => {
      setTimeout(() => {
        hideLoading()
      }, 1000)
      if (error) {
        // your code
      } else {
        await queryClient.invalidateQueries({ queryKey: ['users'] })
      }
    },
  })
}
