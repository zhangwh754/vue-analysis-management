import axios from 'axios'

import loading from '@/components/AppLoading/request-loading'
import CustomError from './CustomError'

/**
 * @typedef {Object} results
 * @property {Ref<Object>} data
 * @property {Ref<string>} error
 */

const service = axios.create({
  baseURL: 'http://192.168.1.79:15417',
  timeout: 1000 * 180, // request timeout
  headers: {},
})

service.interceptors.request.use(
  config => {
    // const authStore = useAuthStore()
    // const token = authStore.accessToken
    // if (token) config.headers.token = token

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export const createRequestMethod =
  method =>
  async (url, data, options = { loading: true }) => {
    try {
      if (options?.loading) {
        loading.value = true
      }

      let response

      if (method === 'get') {
        response = await service[method](url, { params: data, ...options })
      } else {
        response = await service[method](url, data, options)
      }

      const { data: res } = response

      return res.data
    } catch (error) {
      if (error?.response?.data) {
        const result = error.response.data
        return Promise.reject(new CustomError(result?.message, result?.code))
      } else {
        return Promise.reject(new CustomError(error?.message || '网络错误'))
      }
    } finally {
      if (options?.loading) {
        loading.value = false
      }
    }
  }

export default {
  get: createRequestMethod('get'),
  post: createRequestMethod('post'),
}
