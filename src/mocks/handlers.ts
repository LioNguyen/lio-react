import { http, HttpResponse } from 'msw'

import { API_END_POINT } from '@/services/api'
import db from './db.json'

export const handlers = [
  http.get(API_END_POINT.TODOS, () => {
    return HttpResponse.json(db.todos)
  }),

  http.get(`${API_END_POINT.TODOS}/:id`, ({ params }) => {
    const id = params.id
    const todo = db.todos.filter((item) => item.id === +id)[0]

    return HttpResponse.json(todo)
  }),
]
