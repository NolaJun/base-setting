<template>
  <van-tabs v-model="active" sticky>
    <van-tab class="font-14" title="限时秒杀">
      <good ref="MallSeckill" :type="'MallSeckill'"></good>
    </van-tab>
    <van-tab title="最新优惠">
      <good ref="Mall" :type="'Mall'"></good>
    </van-tab>
    <van-tab title="积分商城">
      <good ref="MallIntegral" :type="'MallIntegral'"></good>
    </van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs, Sticky } from 'vant'
import good from '../components/Good'
export default {
  name: 'GoodSection',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Sticky.name]: Sticky,
    good
  },
  data () {
    return {
      active: 0,
      list: []
    }
  },
  activated () {
    console.log(this.list)
  },
  methods: {
    // that.getList(2, '/MallDiscountProduct/GetMallList', 1) // 获取最新优惠列表
    getList (type, url, pages) {
      let that = this
      if (pages) that.page = pages
      let post = {
        size: that.size,
        page: that.page,
        keyword: '',
        status: 1,
        sort: that.order,
        shop_id: this.shop_id,
        by: that.by
      }
      apiPost(that, post, url, 'loading', false, false).then((res) => {
        if (res.code === 200) {
          that.last_page = res.data.last_page
          switch (type) {
            case 2:
              that.lasterData = that.page === 1 ? res.data.data : that.lasterData.concat(res.data.data)
              break
            case 4:
              that.pointerList = that.page === 1 ? res.data.data : that.pointerList.concat(res.data.data)
              break
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
