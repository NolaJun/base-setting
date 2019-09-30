<template>
  <div class="login" :style="{height: height}">
<!--    <van-popup v-model="show">-->
      <van-cell-group class="middle-content border border-radius">
        <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误"/>
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-button loading type="info" loading-text="加载中..." />
<!--    </van-popup>-->
  </div>
</template>

<script>
import { Popup, CellGroup, Field, Button } from 'vant'
export default {
  name: 'Login',
  components: {
    [Popup.name]: Popup,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      height: document.documentElement.clientHeight,
      show: true,
      phone: '13159222760',
      sms: ''
    }
  }
}
</script>
<style lang="less" src="../assets/css/Login.less"></style>
