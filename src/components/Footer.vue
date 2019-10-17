<template>
  <div class="footer">
  <van-tabbar class="tabbar" :fixed="true" v-model="tabIndex" active-color="#fe8247" inactive-color="#000">
    <van-tabbar-item v-for="(item, index) in list" :key="index" :to="item.url">
      <span>{{item.name}}</span>
      <van-image class="tabbar-img img_center" slot="icon" slot-scope="props" :src="props.active ? item.active_icon : item.icon"></van-image>
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Image } from 'vant'
export default {
  name: 'Footer',
  components: {
    [Image.name]: Image,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      tabIndex: 0,
      list: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.list = [
        { icon: '/img/footer1.png', active_icon: '/img/footer_1.png', name: '首页', url: '/Index' },
        { icon: '/img/footer2.png', active_icon: '/img/footer_2.png', name: '商城', url: '/Mall' },
        { icon: '/img/footer3.png', active_icon: '/img/footer_3.png', name: '订单', url: '/Order' },
        { icon: '/img/footer4.png', active_icon: '/img/footer_4.png', name: '我的', url: '/Mine' }
      ]
    }
  }
}
</script>

<style lang="less">
.footer{
  .tabbar{
    height: 100px;
  }
  .tabbar-img{
    width: 40px;
    height: 40px;
    img{
      width: 40px;
      height: 40px;
    }
  }
}
</style>
