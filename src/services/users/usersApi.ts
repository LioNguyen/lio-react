import { User } from '@/types'
import { createAxios } from '../api'

const axios = createAxios()

const USERS_API_ENDPOINT = {
  users: '/users',
}

export class UsersApi {
  public async getUsers() {
    const res = await axios.get<User[]>(USERS_API_ENDPOINT.users)

    return res.data
  }
  public async createUser(data: User) {
    await axios.post(USERS_API_ENDPOINT.users, data)
  }
}
