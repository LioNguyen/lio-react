import { createAxios } from './api'

const axios = createAxios()

export const CAREERS_API_ENDPOINT = {
  careers: '/careers',
}

export class CareersApi {
  public async getCareers() {
    const res = await axios.get(CAREERS_API_ENDPOINT.careers)

    return res.data
  }
}
