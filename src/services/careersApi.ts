import { CareerDetailApiType } from '@/types/career'
import { createAxios } from './api'

const axios = createAxios()

export const CAREERS_API_ENDPOINT = {
  careers: '/careers',
}

export class CareersApi {
  public async getCareers() {
    try {
      const res = await axios.get(CAREERS_API_ENDPOINT.careers)

      if (!res.data) {
        throw new Error('Could not fetch career data')
      }

      return res.data
    } catch (error) {
      throw new Error('Could not fetch career data')
    }
  }
  public async getCareerDetails({ params }: CareerDetailApiType) {
    try {
      const { id } = params

      const res = await axios.get(`${CAREERS_API_ENDPOINT.careers}/${id}`)

      if (!res.data) {
        throw new Error('Could not find that career.')
      }

      return res.data
    } catch (error) {
      throw Error('Could not find that career.')
    }
  }
}
