const axios = require('axios')
const service = axios.create({
  // baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true
})

// 请求头拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
  }
)

// 响应体拦截
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
  }
)

module.exports = service
