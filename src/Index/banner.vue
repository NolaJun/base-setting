<template>
  <van-swipe :autoplay="3000" :width="375" :height="150" class="van-hairline--bottom">
    <van-swipe-item class="img_center" v-for="(image, index) in images" :key="index"><!--375*150-->
      <img class="banner-img" :src="image" alt=""/>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem, Lazyload } from 'vant'
export default {
  name: 'banner',
  components: {
    [Lazyload.name]: Lazyload,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
  },
  data () {
    return {
      images: [
        'https://apidev.kgjsoft.com/upload/wechat_banner/CID_1/Banner_20190613164218.png',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>
