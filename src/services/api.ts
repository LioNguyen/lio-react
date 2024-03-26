import axios from 'axios'

export const API_ENDPOINT = {}

/**
 * timeout is used to set the time limit for the request (ms), default is 0 (no timeout)
 */
export const createAxios = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,

    // `headers` are custom headers to be sent
    headers: { 'X-Requested-With': 'XMLHttpRequest', Authorization: `Bearer ` },

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    // NOTE: params that are null or undefined are not rendered in the URL.
    params: {
      ID: undefined,
    },

    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', 'DELETE', and 'PATCH'
    // When no `transformRequest` is set, must be of one of the following types:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    data: {
      firstName: '',
    },

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 0, // default is `0` (no timeout)

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default

    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    //   browser only: 'blob'
    responseType: 'json', // default

    // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: 'utf8', // default

    // `onUploadProgress` allows handling of progress events for uploads
    // browser only
    onUploadProgress: function () {
      // console.log({ uploadProgressEvent })
      // Do whatever you want with the native progress event
    },

    // `onDownloadProgress` allows handling of progress events for downloads
    // browser only
    onDownloadProgress: function () {
      // console.log({ downloadProgressEvent })
      // Do whatever you want with the native progress event
    },

    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    // If set to 0, no redirects will be followed.
    maxRedirects: 5, // default
  })

  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (request) => {
      /** In dev, intercepts request and logs it into console for dev */
      const token = localStorage.getItem('token')

      if (token) {
        request.headers['Authorization'] = `Bearer ${token}`
      }
      return request
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.status === 400) {
        alert('You are not authorized')
      }
      return response
    },
    (error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data)
      }
      return Promise.reject(error.message)
    },
  )

  return axiosInstance
}
