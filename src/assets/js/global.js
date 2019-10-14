import { SetLocal, RemoveLocal, GetLocal, getUrlKey } from './data'
import { apiPost } from './api'

var appid = ''
var openid = ''
const api = {
  master: '',
  // master: 'https://api.crm.raven.pub',
  local: 'http://api.crm.com'
}
/**
 * 获取appid
 * @param appid
 * @returns {*}
 * @constructor
 */
export const GetAppid = (appid) => {
  console.log(appid)
  if (!appid) appid = localStorage.getItem('appid')
  console.log(appid)
  appid = GetLocal(appid, 'appid')
  return appid
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

/**
 * 页面跳转
 * @param self
 * @returns {boolean}
 */
export const currentPage = (self) => {
  let path = self.$route.path // 当前链接
  if (path === '/') {
    self.$router.push('/Index')
  } else if (path === '/Index') {
    return false
  } else {
    self.$router.push({ path: path })
  }
}

/**
 * 根据链接获取appid
 * @param self
 * @constructor
 */
export const GetUserInfo = (self) => {
  let routers = ['/ShareCoupon/Common', '/ShareBag/Common']
  if (routers.indexOf(self.$route.path) === -1) { // 非分享优惠券和礼包
    if (getUrlKey('id') || getUrlKey('key')) { // url上带appid值
      appid = getUrlKey('id')
      localStorage.setItem('appid', appid) // 保存当前的appid
      if (!GetLocal(appid, 'api')) GetApi(self, appid)
      if (GetLocal(appid, 'appid') === appid) {
        appid = GetLocal(appid, 'appid')
        openid = GetLocal(appid, 'openid')
        makeApi(GetLocal(appid, 'api'))
        if (!openid) {
          GetWxOpenId(self, appid)
        } else {
          CheckLogin(self, appid, openid)
        }
      } else { // 本地没有当前链接上的appid值
        SetLocal(appid, 'appid', appid)
        GetApi(self, appid)
      }
    } else { // url上没有带appid
      appid = GetLocal('', 'appid') // 获取默认的appid
      openid = GetLocal(appid, 'openid')
      let token = GetLocal(openid, 'token')
      self.global.header.Authorization = 'Bearer ' + token
      makeApi(GetLocal(appid, 'api'))
      setTimeout(() => {
        CheckLogin(self, appid, openid)
      }, 400)
    }
  } else { // 普通链接不存在链接带appid值
    self.$router.push({ path: self.$route.path, query: self.$route.query })
  }
}
/**
 * 获取请求数据的后台域名api
 * @param self
 * @param appid 微信appid
 * @constructor
 */
export const GetApi = (self, appid, type) => {
  const loginApi = 'https://apiadmin.kgjsoft.com'
  self.$http.post(loginApi + '/Login/GetWeChatApi', { key: appid }, { emulateJSON: true }).then((res) => {
    res = res.data
    if (res.code === 200) {
      SetLocal(appid, 'api', res.data)
      makeApi(GetLocal(appid, 'api'))
      if (!type) GetWxOpenId(self, appid)
    }
  })
}

/**
 * 获取请求openid
 * @constructor
 */
export const GetOpenId = () => {
  let host = document.domain
  if (host === 'localhost' || host === 'crm.com' || host === 'localhost:8081' || host === 'localhost:8080') {
    // return 'oD1Hz0gZmpkYzNnkfeeEGkV_-tV4'
    return 'oDxCtv9Di1N7-VlryE1UdbVoxm0M'
    // return 'oDxCtv39x6Gk-C96C9r9cjTS4iiQ'
    // return 'oD1Hz0ovBIjX7phEY5jBwXXwlj58'
    // return appid === 'wx4c9a577d4ac1e219' ? 'oD1Hz0gZmpkYzNnkfeeEGkV_-tV4' : 'oDxCtv9Di1N7-VlryE1UdbVoxm0M'
  } else {
    return GetLocal(appid, 'openid')
  }
}
/**
 * 微信授权获取openid
 * @param self
 * @param appid
 * @param type
 * @constructor
 */
export const GetWxOpenId = (self, appid, type) => {
  openid = GetOpenId()
  if (openid) {
    CheckLogin(self, appid, openid)
  } else {
    let code = getUrlKey('code')
    if (!code) { // 网页授权重新获取code
      let state = 123 // 需要传参数请添加进state
      let redirectUrl = window.location.href
      let Url = encodeURIComponent(redirectUrl)
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${Url}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
    } else {
      let params = {
        code: code,
        key: appid
      }
      apiPost(self, params, '/WeChat/GetOpenid', false, false, false).then((res) => {
        if (res.code === 200) {
          self.$vux.loading.hide()
          SetLocal(appid, 'openid', res.data.openid)
          if (!type) CheckLogin(self, appid, res.data.openid)
        }
      })
    }
  }
}
/**
 * 检测用户登录状态
 * @param self
 * @param appid
 * @param openId
 * @constructor
 */
export const CheckLogin = (self, appid, openId) => {
  let params = {
    key: appid,
    openid: openId
  }
  apiPost(self, params, '/WeChat/CheckLogin', false, false, false).then((res) => {
    if (res.code === 200) { // 已登录
      let token = res.data.token
      self.global.header.Authorization = 'Bearer ' + token
      SetLocal(appid, 'openid', openId)
      SetLocal(openId, 'token', token)
      SetLocal(openId, 'user', res.data)
      SetLocal(openId, 'cars', res.data.cars)
      SetLocal(openId, 'card', res.data.card)
      self.isRouter = true
      currentPage(self)
    } else {
      SetLocal(appid, 'openid', openId)
      self.isRouter = true
      self.$router.push('/Login')
    }
  })
}
export default {
  GetUserInfo,
  GetApi,
  GetOpenId,
  GetAppid,
  currentPage,
  makeApi
}
