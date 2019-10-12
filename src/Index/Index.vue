<template>
  <div class="home">
    <!--轮播图-->
    <banner ref="banner"/>
    <!--子区域菜单-->
    <gridItem ref="gridItem"/>
    <!--子区域菜单-->
    <game-section ref="gameSection"/>
    <!--商品展示区-->
    <good-section ref="goodSection"/>
    <Footer ref="Footer"/>
  </div>
</template>

<script>
import banner from './banner'
import gridItem from './gridItem'
import gameSection from './GameSection'
import goodSection from './GoodSection'
import Footer from '../components/Footer'
export default {
  name: 'Index',

  mixins: [],

  components: { banner, gridItem, gameSection, goodSection, Footer },

  props: {},

  data () {
    return {}
  },

  computed: {},

  watch: {},
  activated () {
    this.$refs.Footer.init()
  },
  created () {
    // this.$refs.Footer.init()
  },

  mounted () {},

  destroyed () {},

  methods: {}
}
</script>

<style lang="less" scoped>
.home{
  /deep/ .grid{
    .grid-item {
      .van-grid-item__icon{
        font-size: 80px;
      }
      .van-icon__image{
        width: 80px;
        height: 80px;
      }
    }
  }
  /deep/ .van-tabs--line .van-tabs__wrap{
    height: 80px;
  }
  /deep/ .van-tab{
  font-size: 28px;
  line-height: 80px;
  }
}
</style>
