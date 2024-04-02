import { TaskType } from '@/types'
import { createAxios } from './api'
import { ActionFunctionArgs, redirect } from 'react-router-dom'

const axios = createAxios()

const TASKS_API_ENDPOINT = {
  tasks: '/tasks',
}

export class TasksApi {
  async getTask() {
    const res = await axios.get<TaskType[]>(TASKS_API_ENDPOINT.tasks)

    return res.data
  }

  async createTask(args: ActionFunctionArgs<TaskType>) {
    const data = await args.request.formData()

    if (data) {
      const task: TaskType = {
        id: data.get('title') as string,
        description: data.get('description') as string,
        title: data.get('title') as string,
        isPriority: data.get('isPriority') === '',
      }

      console.log({ task })
    }

    return redirect('/')
  }
}
