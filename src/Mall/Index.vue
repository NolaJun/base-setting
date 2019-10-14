<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="keyword" clearable />
    <good :list="list"></good>
  </div>
</template>

<script>
import { Search } from 'vant'
import good from '../components/Good'
export default {
  name: 'Index',
  components: {
    good,
    [Search.name]: Search
  },
  data () {
    return {
      keyword: '',
      list: [
        { id: 0, name: 'xxx', img: 'https://img.yzcdn.cn/vant/apple-1.jpg' },
        { id: 1, name: 'xxx2', img: 'https://img.yzcdn.cn/vant/apple-1.jpg' },
        { id: 2, name: 'xxx3', img: 'https://img.yzcdn.cn/vant/apple-1.jpg' },
        { id: 3, name: 'xxx4', img: 'https://img.yzcdn.cn/vant/apple-1.jpg' },
        { id: 4, name: 'xxx5', img: 'https://img.yzcdn.cn/vant/apple-1.jpg' },
        { id: 5, name: 'xxx6', img: 'https://img.yzcdn.cn/vant/apple-1.jpg' }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
