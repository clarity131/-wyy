import axios from "axios";
const request = axios.create({
  baseURL:'https://music-player-server.immortalboy.cn',
  timeout: 10000,
  withCredentials: true, // 跨域请求是否携带cookie
  headers: {
    "content-type":"application/json"
  }
})
interface Ierr {
  response: {status: number};
  message: string
}
function code (err: Ierr) {
  switch (err.response.status) {
    case 400 :
      err.message = '请求错误'
      break
    case 401 :
      err.message = '未授权，请重新登陆'
      break
    case 403 :
      err.message = '拒绝访问'
      break
    case 404 :
      err.message = '请求地址错误'
      break
    case 408 :
      err.message = '请求超时'
      break
    case 500 :
      err.message = '服务器内部错误'
      break
    case 501 :
      err.message = '服务器未实现'
      break
    case 502 :
      err.message = '网关错误'
      break
    case 503 :
      err.message = '服务不可用'
      break
    case 504 :
      err.message = '网关超时'
      break
    case 505 :
      err.message = 'HTTP版本不支持'
      break
    
    default:
  }
  return err
}
request.interceptors.request.use((config) => {
  return config
}, (err) => {
  if (err && err.response) {
    err = code(err)
  }
  Promise.reject(err)
})

request.interceptors.response.use((res) => res.data, (err) => {
  if (err && err.response) {
    err = code(err)
  }
  Promise.reject(err)
})
export default request