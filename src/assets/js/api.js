import { GetLocal, GetOpenId, GetAppid } from './storage'

// 请求后台接口
const loginApi = 'https://apiadmin.kgjsoft.com'
const api = {
  master: '',
  local: ''
}
// post请求头
const header = {
  Accept: 'application/json',
  Authorization: 'Bearer'
}

/**
 * 生成请求地址
 * @param user
 */
export const makeApi = (user) => {
  if (user.api === 'api.crm.com') {
    api.master = 'http://' + user.api
  } else {
    api.master = 'https://' + user.api
  }
}

export const apiHttp = (self, url, params) => {
  return new Promise((resolve, reject) => {
    let curUrl = ''
    if (curUrl.indexOf('http') === -1 && curUrl.indexOf('https') === -1) {
      curUrl = getApiUrl()
    }
    let token = GetLocal(GetOpenId(), 'token')
    header.Authorization = 'Bearer ' + token
    self.$http.post(curUrl, params, { headers: header, emulateJSON: true }).then(resolve, reject)
  })
}
/**
 * api请求
 * @param self  vue对应页面的this对象
 * @param params  传给api的参数
 * @param curUrl  浏览器路径
 * @param show    判断是否显示成功信息
 * @param load    判断是否关闭加载框
 * @param type    错误提示框类型 1、 alert 2、message
 * @returns {Promise}
 */
export const apiPost = (self, params, curUrl, load, show, type) => {
  if (!type) type = 1
  if (Object.prototype.toString.call(load) === '[object String]') {
    self.$vux.loading.show()
  }
  return apiHttp(self, params, curUrl).then((res) => {
    res = res.body
    autoLoading(self, load)
    if (show !== false) {
      self.$vux.toast.show(res.data.message)
    }
    return res
  }).catch((error) => {
    autoLoading(self, load)
    if (error.status === 403 || error.status === 400 || error.status === 422 || error.status === 401 || error.status === 302 || error.status === 301) {
      let status = curUrl === '/WeChat/CheckLogin' ? 1 : 0
      responseError(self, error, type, status)
    }
    return failed(error)
  })
}
/**
 * 返回错误信息的路由机制
 * @param self
 * @param error
 * @param type
 */
export const responseError = (self, error, type, status) => {
  let data = error.body
  switch (error.status) {
    case 301:
      self.hasAcount = false
      return self.hasAcount
    case 302:
      self.hasAcount = false
      responseFailed(self, data, 1)
      return self.hasAcount
    case 401:
      return loginPage(self, GetLocal(GetAppid(), 'appid'))
    case 403:
      return responseScope(self)
    case 422:
      let message
      for (let k in data.errors) message = data.errors[k]
      return responseFailed(self, data, 2)
    default:
      return responseFailed(self, data, 1, status)
  }
}
/**
 * 没有权限访问的错误
 * @param self
 */
export const responseScope = (self) => {
  self.$vux.toast.show('message-403')
  if (self.$route.path !== '/Index') {
    self.$store.commit('delete_tabs', self.$route.path)
  }
  // self.$router.push({path: '/index'})
}

/**
 * 语言包转译
 * @param self
 * @param message
 * @returns {string}
 */
export const transform = (self, message) => {
  let result = ''
  message = message.split(' ')
  for (let v of message) {
    result += self.$t(v)
  }
  return result
}
/**
 * 成功
 * @param res   api获取的数据
 */
export const success = (res) => {
  return res
}

/**
 * 错误
 * @param self  vue的this对象
 * @param error  api获取的错误提示
 */
export const fail = (self, error) => {
  error = transform(self, error)
  self.$vux.alert.show({
    title: '提示',
    content: error
  })
}

/**
 * 失败返回的信息
 * @param self
 * @param error
 * @param type
 * @param status
 */
export const responseFailed = (self, error, type, status) => {
  switch (type) {
    case 1:
      return alertMsg(self, '', error.message, status)
    case 2:
      return textMsg(self, 'auto', error.message)
    default:
      return textMsg(self, 'auto', error.message)
  }
}

export default {
  makeApi,
  apiPost
}
