<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="keyword" clearable class="search"/>
    <good :list="list"></good>
    <Footer ref="Footer"/>
  </div>
</template>

<script>
import { Search } from 'vant'
import good from '../components/Good'
import Footer from '../components/Footer'
export default {
  name: 'Index',
  components: {
    Footer,
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

<style lang="less" scoped>
  .search{
    font-size: 28px;
    .van-cell{
      font-size: 28px;
      line-height: 2;
    }
    .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
      font-size: 28px;
    }
  }
</style>
