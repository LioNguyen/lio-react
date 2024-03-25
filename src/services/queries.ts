import { useQueries, useQuery } from '@tanstack/react-query'
import { getTodosIds, getTodo, getPosts, getPost } from './api'

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

export function usePosts() {
  return useQuery({ queryKey: ['posts'], queryFn: getPosts })
}

export function usePost(postList: any[]) {
  return useQueries({
    queries: (postList ?? []).map((post) => {
      return {
        queryKey: ['post', [post.id]],
        queryFn: () => getPost(post.id),
      }
    }),
  })
}
