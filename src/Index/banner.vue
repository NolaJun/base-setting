<template>
  <van-swipe :autoplay="3000" :width="375" :height="200">
    <van-swipe-item class="img_center" v-for="(image, index) in images" :key="index">
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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>
