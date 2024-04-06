import { createAxios } from '@/services/api'
import { Status } from '@/types'

const axios = createAxios()

const TABLE_DATA_API_ENDPOINT = {
  tableData: '/tableData',
  statuses: '/statuses',
}

export class TableApi {
  async getTableData() {
    const res = await axios.get(TABLE_DATA_API_ENDPOINT.tableData)

    return res.data
  }
  async getStatuses() {
    const res = await axios.get<Status[]>(TABLE_DATA_API_ENDPOINT.statuses)

    return res.data
  }
}
