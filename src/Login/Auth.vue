<template>
  <div>授权</div>
</template>

<script>
import { GetUserInfo } from '../assets/js/global'

export default {
  name: 'Auth',
  components: {},
  data () {
    return {}
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      GetUserInfo(this)
    }
  }
}
</script>
