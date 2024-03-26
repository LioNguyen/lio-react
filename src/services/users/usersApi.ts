import { UserType } from '@/types'
import { createAxios } from '../api'

const axios = createAxios()

const USERS_API_ENDPOINT = {
  users: '/users',
}

export class UsersApi {
  public async getUsers() {
    const res = await axios.get<UserType[]>(USERS_API_ENDPOINT.users)

    return res.data
  }
  public async createUser(data: UserType) {
    await axios.post(USERS_API_ENDPOINT.users, data)
  }
  public async deleteUser(id: string) {
    await axios.delete(`${USERS_API_ENDPOINT.users}/${id}`)
  }
}
