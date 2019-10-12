<template>
  <van-grid class="grid" v-model="active">
    <van-grid-item class="grid-item" icon="/img/service1.png" text="在线预约"></van-grid-item>
    <van-grid-item class="grid-item" icon="/img/service2.png" text="会员套餐"></van-grid-item>
    <van-grid-item class="grid-item" icon="/img/service3.png" text="会员联盟"></van-grid-item>
    <van-grid-item class="grid-item" icon="/img/service4.png" text="关于我们"></van-grid-item>
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
      active: null,
      list: []
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .grid{

  }
  .grid-item {
    .van-grid-item__icon{
      font-size: 40px!important;
    }
    .van-icon__image{
      width: 40px!important;
      height: 40px!important;
    }
  }
  .van-icon__image{
    width: 40px;
    height: 40px;
  }
</style>
