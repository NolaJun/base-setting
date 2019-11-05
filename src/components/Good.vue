<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    :error.sync="error"
    error-text="请求失败，点击重新加载"
    @load="getData">
    <van-grid :column-num="2" border square>
      <van-grid-item class="grid-item" v-for="item in list" :key="item.id">
        <van-image :src="item.img"></van-image>
        {{item.name}}
      </van-grid-item>
    </van-grid>
  </van-list>
</template>

<script>
import { Grid, GridItem, Image, List } from 'vant'
export default {
  name: 'Good',
  components: {
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [List.name]: List
  },
  props: {
    type: { type: String, default: 'Mall' }
  },
  data () {
    return {
      list: [],
      active: null,
      error: false,
      loading: false,
      finished: false
    }
  },
  activated () {
  },
  methods: {
    getData () {
      switch (this.type) {
        case 'Mall': // 普通商城
          this.getList(0)
          break
        case 'MallSeckill': // 限时秒杀
          this.getList(1)
          break
        case 'MallIntegral': // 最新优惠
          this.getList(2)
          break
        case 'MallDiscount':
          this.getList(3)
          break
        case 'MallSpell':
          this.getList(4)
          break
      }
    },
    getList (id) {
      // 异步更新数据
      if (id === 1) {
        // this.$axios.post('/MallSeckill').then((res) => {
        //   console.log(res)
        // })
      } else {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + id)
          }
          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true
          }
        }, 500)
      }
    }
  }
}
</script>

<style scoped>

</style>
