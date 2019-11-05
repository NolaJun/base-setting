import Mock from 'mockjs'
import data from './data'
Mock.setup({
  timeout: '200 - 400'
})

export function skillData (params) {
  const prarmsObj = JSON.parse(prarms.body)
  return Object.assign(prarmsObj, { data: data.skill })
}
Mock.mock('/MallSeckill', 'post', skillData)
