import axios from 'axios'

export const API_END_POINT = {}

export const createAxios = () => {
  const axiosInstance = axios.create({
    // headers: {
    //   Authorization: `Bearer `,
    // },
    baseURL: import.meta.env.VITE_BASE_API_URL,
  })

  axiosInstance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return error
      // Show error toast
    },
  )

  return axiosInstance
}
