<template>
  <div class="login">
    <van-cell-group>
<!--      <van-field v-model="username" label="用户名" placeholder="请输入用户名" error/>-->
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
</style>
