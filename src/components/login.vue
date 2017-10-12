<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" width="234" height="83">
    </div>
    <div class="login-form">
      <div class="login-form-item" :class="{'is-danger': errors.has('phone') }">
        <div class="reg-block">
          <input v-model="phone" v-validate="'required|phone'" name="phone" class="reg-input"
                 placeholder="请输入手机号码">
          <span v-show="errors.has('phone')" class="text-style" v-cloak> {{ errors.first('phone') }} </span>
        </div>
      </div>
      <div class="login-form-item" :class="{'is-danger': errors.has('password') }">
        <div class="reg-block">
          <input v-model="password" v-validate="'required|min:6|password'" name="password" class="reg-input"
                 placeholder="请输入密码">
          <span v-show="errors.has('password')" class="text-style" v-cloak> {{ errors.first('password') }} </span>
        </div>
      </div>
      <div class="login-form-item" :class="{'is-danger': errors.has('yzm') }">
        <div class="login-block">
          <input v-model="yzm" v-validate="'required|size:4'" name="yzm" class="login-input login-yzm-input"
                 placeholder="验证码">
          <span class="login-yzm">1234</span>
          <span v-show="errors.has('yzm')" class="text-style" v-cloak> {{ errors.first('yzm') }} </span>
        </div>
      </div>

      <button class="btn">登录</button>
    </div>
    <div class="footer">
      <mt-checklist
        v-model="value"
        :options="['自动登录']">
      </mt-checklist>
      <span class="to-login"><a href="#">忘记密码了？</a> | <a href="#">注册新账号</a></span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        phone: null,
        yzm: null,
        value: ['自动登录'],
        password: null
      }
    }
  }
</script>

<style>
  .login .logo {
    margin: 60px 0 60px;
    text-align: center;
  }

  .login .login-form {
    width: 70%;
    margin: 0 auto;
  }

  .login-form-item {
    height: 36px;
    line-height: 36px;
    padding-left: 6px;
    margin-bottom: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .login-form-item:hover {
    border-color: #2d8cf0;
  }

  .login-form-item .login-input {
    border: none;
  }

  .login-block {
    position: relative;
  }

  .login-form-item .login-input:focus {
    border: none;
  }

  .text-style {
    position: absolute;
    top: 100%;
    left: -3px;
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #f24546;
    font-size: 14px;
  }

  .login-yzm-input, .login-phoneYZM-input {
    box-sizing: border-box;
    width: 70%;
    margin-left: -6px;
    padding-left: 6px;
  }

  .login-yzm, .login-phoneYZM {
    display: inline-block;
    float: right;
    width: 30%;
    border-left: 1px solid #ddd;
    text-align: center;
  }


  .btn {
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 4px;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
  }
  .footer{
    width: 70%;
    margin: 0 auto;
  }
  .footer .mint-checklist{
    display: inline-block;
    width: 120px;
    vertical-align: top;
    font-size: 14px;
  }
  .mint-cell-wrapper{
    font-size: 14px;
    padding: 0;
  }
  .mint-checkbox-label{
    font-size: 14px;
  }
  .mint-checkbox-core{
    width: 14px;
    height: 14px;
  }
  .mint-checkbox-core::after{
    top: 2px;
    left: 5px;
    width: 2px;
    height: 6px;
  }
  .to-login {
    display: inline-block;
    float: right;
    margin-top: 8px;
    margin-right: 10px;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    line-height: 48px;
  }
  .reg-block{
    position: relative;
  }
  .to-login a {
    color: #2d8cf0;
  }
  .is-danger{
    border-color: #f24546;
  }
</style>
