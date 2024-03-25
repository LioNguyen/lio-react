import { TodoType } from '@/types'
import axios from 'axios'

export const API_END_POINT = {
  TODOS: '/todos',
  POSTS: '/posts',
}

export const createAxios = () => {
  const axiosInstance = axios.create({
    // headers: {
    //   Authorization: `Bearer `,
    // },
    // baseURL: import.meta.env.VITE_BASE_URL,
    baseURL: import.meta.env.VITE_BASE_API_URL,
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

// Use import.meta.env.VITE_BASE_API_URL
export const getTodosIds = async () => {
  const res = await createAxios().get<TodoType[]>(API_END_POINT.TODOS, {
    params: {
      _start: 0,
      _limit: 10,
    },
  })

  return res.data.map((todo) => todo.id)
}

// Use import.meta.env.VITE_BASE_API_URL
export const getTodo = async (id: number) => {
  const res = await createAxios().get<TodoType>(`${API_END_POINT.TODOS}/${id}`)

  return res.data
}

// Use import.meta.env.VITE_BASE_API_URL
export const createTodo = async (data: TodoType) => {
  await createAxios().post(API_END_POINT.TODOS, data)
}

// Use import.meta.env.VITE_BASE_API_URL
export const getPosts = async () => {
  const res = await createAxios().get(API_END_POINT.POSTS, {
    params: {
      _start: 0,
      _limit: 10,
    },
  })

  return res.data
}

// Use import.meta.env.VITE_BASE_API_URL
export const getPost = async (id: number) => {
  const res = await createAxios().get(`${API_END_POINT.POSTS}/${id}`)

  return res.data
}

export const patchPost = async (data: any) => {
  const res = await createAxios().patch(`${API_END_POINT.POSTS}/${data.id}`, {
    title: data.title,
  })

  return res.data
}
