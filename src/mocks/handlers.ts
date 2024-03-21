import { http, HttpResponse } from 'msw'

import { API_END_POINT } from '@/services'
import db from './db.json'

const todoList = [...db.todos]

export const handlers = [
  http.get(API_END_POINT.TODOS, () => {
    return HttpResponse.json(todoList)
  }),

  http.get(`${API_END_POINT.TODOS}/:id`, ({ params }) => {
    const id = params.id
    const todo = todoList.filter((item) => item.id === +id)[0]

    return HttpResponse.json(todo)
  }),

  http.post(API_END_POINT.TODOS, async ({ request }) => {
    const body = await request.json()

    todoList.push({
      ...(body as any),
      id: todoList.length + 1,
    } as any)

    return HttpResponse.json(body)
  }),
]
