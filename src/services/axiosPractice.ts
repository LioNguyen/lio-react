import axios, { AxiosRequestConfig } from 'axios'

import { createAxios } from './api'

const axiosInstance = createAxios()

/**
 * Use params to filter data in GET request
 * Use data to send data in POST, PUT, PATCH request
 */
class AxiosPractice {
  async getData(url: string, config?: AxiosRequestConfig) {
    return await axiosInstance.get(url, config)
  }
  async postData(url: string, data: any, config?: AxiosRequestConfig) {
    return axiosInstance.post(url, data, config)
  }
}

const axiosPractice = new AxiosPractice()

/**
 * ----- START: GET request -----
 */
// axiosPractice.getData('/users', {
//   params: { id: 1, limit: 5 },
// })

// axiosPractice.getData('/users/74f61ae8-24b5-441f-99d0-85d72aa46c16', {
//   params: { id: 1, limit: 5 },
// })

// Another way to use axios
axiosInstance({
  method: 'get',
  url: '/users',
  params: { username: 'John Doe' },
}).then(() => {
  // Your code
})
/**
 * ----- END: GET request -----
 */

/**
 * ----- START: GET multiple request -----
 */
// function getUsers() {
//   return axiosPractice.getData('/users')
// }

// function getUserDetail(userId: string) {
//   return axiosPractice.getData(`/users/${userId}`)
// }

// function filterUser(username: string) {
//   return axiosPractice.getData('/users', {
//     params: { username, limit: 5 },
//   })
// }

// Promise.all([
//   getUsers(),
//   getUserDetail('74f61ae8-24b5-441f-99d0-85d72aa46c16'),
//   filterUser('John Doe'),
// ]).then((res) => {
//   const [users, userDetailv1, userDetailv2] = res
//   console.log(users.data)
//   console.log(userDetailv1.data)
//   console.log(userDetailv2.data)
// })

try {
  const res1 = await axiosPractice.getData('/users')
  const res2 = await axiosPractice.getData(
    `/users/74f61ae8-24b5-441f-99d0-85d72aa46c16`,
  )
  const res3 = await axiosPractice.getData('/users', {
    params: { username: 'John Doe', limit: 5 },
  })

  console.log(res1.data)
  console.log(res2.data)
  console.log(res3.data)
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error)
  } else {
    console.log(error)
  }
}
/**
 * ----- END: GET multiple request -----
 */

/**
 * ----- START: POST request -----
 */
// axiosPractice.postData('/users', {
//   id: v4(),
//   username: 'John Doe',
// })

// axios({
//   method: 'post',
//   url: '/users',
//   data: {
//     id: v4(),
//     username: 'Nghi Nguyen',
//   },
// })
/**
 * ----- END: POST request -----
 */
