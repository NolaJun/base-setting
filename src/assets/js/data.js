/**
 * 链接上获取参数信息
 * @param name
 * @returns {string}
 */
export const getUrlKey = (name) => {
  let z = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [null, ''])[1].replace(/\+/g, '%20')) || null
  return z
}

/**
 * 设置localStorage
 * @param type 0-appid， 1-openid
 * @param key
 * @param val
 * @constructor
 */
export const SetLocal = (type, key, val) => {
  let prefix = !type ? '' : type + '_'
  key = prefix + key
  let data = { val: val }
  localStorage.setItem(key, JSON.stringify(data))
}
/**
 * 获取localstorage数据
 * @param type
 * @param k
 * @returns {null|*}
 * @constructor
 */
export const GetLocal = (type, k) => {
  if (!localStorage) return null
  if (!type) type = localStorage.getItem('appid') // 当连接上不存在appid时，默认使用本地的appid
  let key = type ? type + '_' + k : k
  let data = JSON.parse(localStorage.getItem(key))
  if (!data) return null
  else return data.val
}
/**
 * 移除单项localStorage
 * @param type
 * @param k
 * @returns {null}
 * @constructor
 */
export const RemoveLocal = (type, k) => {
  if (!localStorage) return null
  let key = type ? type + '_' + k : k
  localStorage.removeItem(key)
}

export default {
  getUrlKey,
  GetLocal,
  SetLocal,
  RemoveLocal
}
