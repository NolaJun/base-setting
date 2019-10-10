<template>
  <div>
    <!--轮播图-->
    <banner ref="banner"/>
    <!--子区域菜单-->
    <gridItem ref="gridItem"/>
  </div>
</template>

<script>
import banner from './banner'
import gridItem from './gridItem'
export default {
  name: 'Index',

  mixins: [],

  components: { banner, gridItem },

  props: {},

  data () {},

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {}
}
</script>

<style scoped>

</style>
