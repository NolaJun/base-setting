<template>
  <van-swipe :autoplay="3000" :width="375" :height="86" :show-indicators="false">
    <van-swipe-item class="img_center" v-for="(image, index) in images" :key="index">
      <img class="banner-img" :src="image" alt=""/>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'banner',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
  },
  data () {
    return {
      images: [
        '/img/active.png',
        '/img/active-2.png',
        '/img/active-3.png'
      ]
    }
  }
}
</script>
