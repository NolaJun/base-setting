<template>
  <van-tabs v-model="active">
    <van-tab class="font-14" title="限时秒杀">内容 1</van-tab>
    <van-tab title="最新优惠">
      <good :list="list"></good>
    </van-tab>
    <van-tab title="积分商城">内容 3</van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant'
import good from '../components/Good'
export default {
  name: 'GoodSection',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    good
  },
  data () {
    return {
      active: 1,
      list: []
    }
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
