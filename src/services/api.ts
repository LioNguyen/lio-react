import { Todo } from '@/types'
import axios from 'axios'

export const API_END_POINT = {
  TODOS: '/api/todos',
}

export const createAxios = () => {
  const axiosInstance = axios.create({
    // headers: {
    //   Authorization: `Bearer `,
    // },
    baseURL: import.meta.env.VITE_BASE_URL,
  })

  axiosInstance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return error
      // Show error toast
    },
  )

  return axiosInstance
}

export const getTodosIds = async () => {
  const res = await createAxios().get<Todo[]>(API_END_POINT.TODOS)

  return res.data.map((todo) => todo.id)
}

export const getTodo = async (id: number) => {
  const res = await createAxios().get(`${API_END_POINT.TODOS}/${id}`)

  return res.data
}
