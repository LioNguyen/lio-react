import { useQueries, useQuery } from '@tanstack/react-query'
import { getTodosIds, getTodo } from './api'

export const useTodoIds = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodosIds,
  })
}

export const useTodos = (ids: (number | undefined)[] | undefined) => {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['todo', { id }],
        queryFn: () => getTodo(id!),
      }
    }),
  })
}
