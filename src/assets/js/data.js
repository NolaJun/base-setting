
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
  let data = {
    val: val
  }
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

/**
 * 数据深拷贝
 * @param name
 * @returns {string}
 */
export const getUrlKey = (name) => {
  // console.log(name, (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href)))
  let z = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [null, ''])[1].replace(/\+/g, '%20')) || null
  // alert(name + '=' + z)
  return z
}

export default {
  getUrlKey,
  RemoveLocal,
  GetLocal,
  SetLocal
}
