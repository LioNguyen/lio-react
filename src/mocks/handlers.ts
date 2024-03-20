import { http, HttpResponse } from 'msw'

export const handlers = [
  // And here's a request handler with MSW
  // for the same "GET /user" request that
  // responds with a mock JSON response.
  http.get('https://jsonplaceholder.typicode.com/users', ({ request }) => {
    return HttpResponse.json([
      {
        name: 'Lio',
      },
      {
        name: 'Nguyen',
      },
      {
        name: 'Happi',
      },
    ])
  }),
]
