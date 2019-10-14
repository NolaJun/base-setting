<template>
  <van-tabs v-model="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant'

export default {
  name: 'GoodSection',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>
