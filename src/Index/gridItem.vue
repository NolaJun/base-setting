<template>
  <van-grid>
    <van-grid-item icon="../assets/img/service1.png" text="在线预约" to="/">
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    </van-grid-item>
    <van-grid-item icon="photo-o" text="会员套餐" />
    <van-grid-item icon="photo-o" text="会员联盟" />
    <van-grid-item icon="photo-o" text="关于我们" />
  </van-grid>
</template>

<script>
import { Grid, GridItem, Image } from 'vant'
export default {
  name: 'gridItem',
  components: {
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data () {
    return {
      list: []
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
