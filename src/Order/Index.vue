<template>
  <div>
    <van-tabs v-model="active" sticky>
      <van-tab class="font-14" title="全部">
      </van-tab>
      <van-tab title="待付款">
      </van-tab>
      <van-tab title="支付超时">
      </van-tab>
      <van-tab title="作废">
      </van-tab>
      <van-tab title="支付完成">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Sticky } from 'vant'
export default {
  name: 'Order',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Sticky.name]: Sticky,
    good
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped></style>
