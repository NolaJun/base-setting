<template>
  <div class="login" :style="{height: height}">
    <van-cell-group class="middle-content border border-radius">
      <h4 class="text-left">登录</h4>
      <van-field class="form-input fas" border v-model="phone" label="手机号" left-icon="fa-mobile-alt" placeholder="请输入手机号码" error>
        <van-image slot="left-icon" width="20" height="20" src="../assets/img/mobile-alt.svg"></van-image>
      </van-field>
      <van-field class="form-input" v-model="sms" center clearable label="验证码" placeholder="请输入短信验证码">
        <van-button class="form-input-btn" slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button class="form-btn login-btn" round :loading="loading" type="warning" loading-text="登录中...">登录</van-button>
  </div>
</template>

<script>
import { Popup, CellGroup, Field, Button, Image } from 'vant'
export default {
  name: 'Login',
  components: {
    [Image.name]: Image,
    [Popup.name]: Popup,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      height: document.documentElement.clientHeight,
      loading: false,
      show: true,
      phone: '13159222760',
      sms: ''
    }
  }
}
</script>
<style lang="less" src="../assets/css/Login.less"></style>
