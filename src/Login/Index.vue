<template>
  <div class="login" :style="{height: height}">
    <van-cell-group class="middle-content">
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误"/>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <van-button loading type="info" loading-text="加载中..." />
  </div>
</template>
<script>
import { CellGroup, Field, Button } from 'vant'
export default {
  name: 'Login',
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      height: document.documentElement.clientHeight,
      phone: '13159222760',
      sms: ''
    }
  }
}
</script>
<style lang="less">
  .login{
    background: url('../assets/img/login-bg.jpg');
    background-size: cover;
  }
  .middle-content{
    border: 1Px solid #f9f9f9;
    width: 500px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
