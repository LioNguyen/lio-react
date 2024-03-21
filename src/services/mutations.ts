import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createTodo } from './api'
import { TodoType } from '@/types'

export function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TodoType) => createTodo(data),
    onMutate: console.log,
    onSuccess: console.log,
    onError: console.log,

    // This property indicates actions after mutating data is completed
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: ['todos'] })
      }
    },
  })
}
