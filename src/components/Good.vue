<template>
  <van-grid :column-num="2" border square>
    <van-grid-item class="grid-item" v-for="item in list" :key="item.id">
      <van-image :src="item.img"></van-image>
      {{item.name}}
    </van-grid-item>
  </van-grid>
</template>

<script>
import { Grid, GridItem, Image } from 'vant'
export default {
  name: 'Good',
  components: {
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  props: {
    list: { type: Array, default: () => { return [] } }
  },
  data () {
    return {
      active: null
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
