<template>
  <div class="grid">
    <van-grid v-model="active">
      <van-grid-item class="grid-item" icon="/img/service1.png" text="在线预约"></van-grid-item>
      <van-grid-item class="grid-item" icon="/img/service2.png" text="会员套餐"></van-grid-item>
      <van-grid-item class="grid-item" icon="/img/service3.png" text="会员联盟"></van-grid-item>
      <van-grid-item class="grid-item" icon="/img/service4.png" text="关于我们"></van-grid-item>
    </van-grid>
  </div>
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

<style lang="less">
  /*.grid{*/
  /*  .grid-item {*/
  /*    .van-grid-item__icon{*/
  /*      font-size: 80px;*/
  /*    }*/
  /*    .van-icon__image{*/
  /*      width: 80px;*/
  /*      height: 80px;*/
  /*    }*/
  /*  }*/
  /*}*/
</style>
