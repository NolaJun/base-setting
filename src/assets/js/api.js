import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { GetLocal, SetLocal } from './data'
import { GetApi, GetAppid, GetOpenId } from './global'

Vue.use(VueAxios, axios)
const config = {
  proxy: '' // 代理配置
}
// axios基本配置
const httpService = axios.create({
  baseURL: 'https://apidev.kgjsoft.com',
  timeout: 10000,
  withCredentials: true
})
// 请求开始拦截器
httpService.interceptors.request.use(conf => {
  // 在发送请求前对header添加token
  conf.headers['Authorization'] = GetLocal(GetOpenId(), 'token')
  return conf
}, error => {
  // 对请求错误进行处理
  Promise.reject(error)
  // { status: 0, msg: error.message }
})
// 响应请求拦截器
httpService.interceptors.response.use(response => {
  // 响应数据状态码检测
  return Promise.resolve(response)
  // .then(checkCode)
}, error => {
  // 响应错误处理
  checkStatus(error.response)
  return Promise.reject(error)
})
// http状态码错误处理
const checkStatus = (res) => {
  // window.$pig.$vux.loading.hide()
  switch (res.code) {
    case 401: { // 登录过期
      console.log('登录过期')
      break
    }
    default:
      console.log('服务器存在异常', 'middle')
      break
  }
}
// 后台自定义 code错误处理
const checkCode = (res) => {
  if (res) {
    if (res.data.code === 0 || moreCodeFn(res)) { // code为0成功
      return res
    } else {
      console.log(res.data.msg) // 统一处理错误
      return false
    }
  } else {
    return false
  }
}

// 过滤 接口函数（这些接口可以自定义 错误处理）
const moreCodeFn = (res) => {
  let url = res.config.url // 当前URL
  let urlArray = ['/auth/morecode/token', '/social/morecode/join']
  for (let i = 0; i < urlArray.length; i++) {
    if (url.indexOf(urlArray[i]) >= 0) {
      return true
    }
  }
  return false
}

// 解析参数
const formatParams = (method = 'GET', params) => {
  // headers配置
  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  }
  switch (method) {
    case 'POST':
      console.log(params)
      return {
        headers,
        method,
        data: params
      }
    case 'PUT':
      return {
        headers,
        method,
        data: params
      }
    case 'DELETE':
      return {
        headers,
        method
      }
    case 'GET':
      return {
        headers,
        method,
        params
      }
    default:
      return {
        headers,
        method,
        params
      }
  }
}
// eslint-disable-next-line import/export
export const apiPost = (self, params, url) => {
  return new Promise((resolve, reject) => {
    httpService(Object.assign(formatParams('POST', params), {
      url: `${config.proxy}` + url
    })).then(response => { resolve(response) }).catch(error => { reject(error) })
  })
}
/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
// export const apiPost = (url, params = {}) => {
//   return new Promise((resolve, reject) => {
//     httpService({
//       url: url,
//       method: 'post',
//       data: params
//     }).then(response => {
//       resolve(response)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }
export default {
  apiPost
}
