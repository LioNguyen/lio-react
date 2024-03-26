import { useQuery } from '@tanstack/react-query'
import { UsersApi } from './usersApi'

const userApi = new UsersApi()

interface GetUsersType {
  enabled?: boolean
}

export function useGetUsers({ enabled = false }: GetUsersType) {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,

    // Toggle query
    enabled,

    // Modify data returned
    select: (user) => (enabled ? user : []),

    // Khi dữ liệu trở nên lỗi thời (stale), React Query sẽ bắt đầu tải dữ liệu mới từ nguồn.
    // Infinity sẽ làm query không bao giờ lỗi thời (stale)
    staleTime: Infinity,
  })
}
