import { TaskType } from '@/types'
import { createAxios } from './api'

const axios = createAxios()

const TASKS_API_ENDPOINT = {
  tasks: '/tasks',
}

export class TasksApi {
  async getTask() {
    const res = await axios.get<TaskType[]>(TASKS_API_ENDPOINT.tasks)

    return res.data
  }
}
