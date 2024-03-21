import { useQueries, useQuery } from '@tanstack/react-query'
import { getTodosIds, getTodo } from './api'

export function useTodoIds() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodosIds,
  })
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ['todo', { id }],
        queryFn: () => getTodo(id!),
      }
    }),
  })
}
