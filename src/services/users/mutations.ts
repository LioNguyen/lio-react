import { useMutation, useQueryClient } from '@tanstack/react-query'

import { User } from '@/types'
import { UsersApi } from './usersApi'

const userApi = new UsersApi()

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: User) => userApi.createUser(data),
    onSettled: async (_, error) => {
      if (error) {
        // your code
      } else {
        await queryClient.invalidateQueries({ queryKey: ['users'] })
      }
    },
  })
}
