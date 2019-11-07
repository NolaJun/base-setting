<template>
  <div class="login" :style="{height: height}">
    <van-cell-group class="middle-content border border-radius">
      <h4 class="text-left">登录</h4>
      <van-field class="form-input fas" border v-model="mobile" label="手机号" left-icon="fa-mobile-alt" placeholder="请输入手机号码" error>
        <i slot="left-icon" class="iconfont icon-account orange"></i>
      </van-field>
      <van-field class="form-input" v-model="checkCode" center clearable label="验证码" placeholder="请输入短信验证码">
        <i slot="left-icon" class="iconfont icon-check-code orange"></i>
        <van-button class="form-input-btn" slot="button" size="small" type="warning" @click="getSms">{{times === 60 ? '发送验证码' : times}}</van-button>
      </van-field>
    </van-cell-group>
    <van-button class="form-btn login-btn" round :loading="loading" type="warning" loading-text="登录中..." @click="login">登录</van-button>
  </div>
</template>

<script>
import { Popup, CellGroup, Field, Button, Image } from 'vant'
// import { GetApi } from '../assets/js/global'
import { getUrlKey } from '../assets/js/storage'
import { ToastMsg } from '../assets/js/api'
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
      mobile: '',
      checkCode: '',
      times: 60,
      timer: null // 定时器名称
    }
  },
  methods: {
    getSms () {
      let that = this
      if (that.mobile.length < 11) return textMsg(this, '50%', 'login.no_mobile') // 手机号长度不正确

      if (that.times !== 60) return ToastMsg(that, 'tip.get_checkcode') // 倒计时未结束重复点击

      if (this.flag) return // 防重复点击多次请求
      this.flag = true
      let params = { // 获取验证码所需参数
        key: this.Infos.GetLocal('', 'appid'),
        mobile: this.mobile
      }
      this.timeCountDown()
      // textMsg(this, '60%', 'tip.check_code')
      apiPost(that, params, '/WeChat/VerifyCode', false, false, false).then((res) => {
        if (res.code === 200) {
          textMsg(this, '60%', 'tip.check_code')
        } else {
          clearInterval(this.timer)
          this.flag = false
          that.times = 60
        }
      })
    },
    timeCountDown () { // 倒计时
      let that = this
      that.timer = setInterval(() => {
        if (that.times === 0) {
          clearInterval(that.timer)
          that.flag = false
          that.times = 60
        } else {
          that.times--
        }
      }, 1000)
    },
    login () {
      let appid = getUrlKey('id')
      this.$router.push('/Index')
    }
  }
}
</script>
<style lang="less" src="../assets/css/Login.less"></style>
