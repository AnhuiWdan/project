<template>
  <div class="reg">
    <div class="logo">
      <img src="../assets/logo.png" width="234" height="83">
    </div>
    <div class="reg-form">
      <div class="reg-form-item">
        <div class="reg-block">
          <input v-model="phone" v-validate="'required|phone'" name="phone" class="reg-input"
                 placeholder="请输入手机号码">
          <span v-show="errors.has('phone')" class="text-style" v-cloak> {{ errors.first('phone') }} </span>
        </div>
      </div>
      <div class="reg-form-item">
        <div class="reg-block">
          <input v-model="password" v-validate="'required|min:6|password'" name="password" class="reg-input"
                 placeholder="请输入密码">
          <span v-show="errors.has('password')" class="text-style" v-cloak> {{ errors.first('password') }} </span>
        </div>
      </div>
      <div class="reg-form-item">
        <div class="reg-block">
          <input v-model="yzm" v-validate="'required|size:4'" name="yzm" class="reg-input reg-yzm-input"
                 placeholder="验证码">
          <span class="reg-yzm">1234</span>
          <span v-show="errors.has('yzm')" class="text-style" v-cloak> {{ errors.first('yzm') }} </span>
        </div>
      </div>
      <div class="reg-form-item">
        <div class="reg-block">
          <input v-model="phoneYZM" v-validate="'required'" name="phoneYZM" class="reg-input reg-phoneYZM-input"
                 placeholder="请输入短信验证码">
          <button class="reg-phoneYZM" @click="run">{{text}}</button>
          <span v-show="errors.has('phoneYZM')" class="text-style" v-cloak> {{ errors.first('phoneYZM') }} </span>
        </div>
      </div>

      <button class="btn">注册</button>
    </div>
    <p class="to-login">已经有账号了？ <a href="#">点击登录</a></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        phone: null,
        phoneYZM: null,
        yzm: null,
        password: null,
        count: 0
      }
    },
    computed: {
      text: function () {
        return this.count > 0 ? this.count + 's 秒后获取' : '获取验证码'
      }
    },
    methods: {
      run: function () {
        this.count = 60
        this.timer()
      },
      timer: function () {
        if (this.count > 0) {
          this.count--
          setTimeout(this.timer, 1000)
        }
      }
    }
  }
</script>

<style scoped>
  .reg .logo {
    margin: 30px 0 40px;
    text-align: center;
  }

  .reg .reg-form {
    width: 70%;
    margin: 0 auto;
  }

  .reg-form-item {
    height: 36px;
    line-height: 36px;
    padding-left: 6px;
    margin-bottom: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .reg-form-item:hover {
    border-color: #2d8cf0;
  }

  .reg-form-item .reg-input {
    border: none;
  }

  .reg-block {
    position: relative;
  }

  .reg-form-item .reg-input:focus {
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

  .reg-yzm-input, .reg-phoneYZM-input {
    box-sizing: border-box;
    width: 70%;
    margin-left: -6px;
    padding-left: 6px;
  }

  .reg-yzm, .reg-phoneYZM {
    display: inline-block;
    float: right;
    width: 30%;
    border-left: 1px solid #ddd;
    text-align: center;
  }

  .reg-phoneYZM {
    border: none;
    background-color: #ddd;
    height: 36px;
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

  .to-login {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
  }

  .to-login a {
    color: #2d8cf0;
  }
</style>
