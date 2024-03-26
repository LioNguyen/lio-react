import { useQuery } from '@tanstack/react-query'
import { UsersApi } from './usersApi'

const userApi = new UsersApi()

export function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
  })
}
