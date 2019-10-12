<template>
  <div>
    <!--轮播图-->
    <banner ref="banner"/>
    <!--子区域菜单-->
    <gridItem ref="gridItem"/>
    <!--子区域菜单-->
    <game-section ref="gameSection"/>
    <Footer ref="Footer"/>
  </div>
</template>

<script>
import banner from './banner'
import gridItem from './gridItem'
import gameSection from './GameSection'
import Footer from '../components/Footer'
export default {
  name: 'Index',

  mixins: [],

  components: { banner, gridItem, gameSection, Footer },

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

<style scoped>

</style>
