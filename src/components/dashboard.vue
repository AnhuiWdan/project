<template>
  <div id="app">
    <div class="header">
      <div class="top">主页</div>
      <div class="start"><img src="../assets/open.png" alt=""></div>
      <div class="next">
        <mt-button size="small">下一条</mt-button>
      </div>
      <p class="now-load">

        <span v-if="count">延时<span class="ping">{{ping}}</span>毫秒<span class="box">适中</span><span
          class="link">{{link}}</span></span>
        <span v-else>{{link}}</span>
      </p>
    </div>
    <div class="content">
      <p class="content-item">
        <mt-cell
          title="选择路线"
          to="/list"
          is-link
          :value="value1+'条'">
          <img slot="icon" src="../assets/select.png" width="16" height="16">
        </mt-cell>
      </p>
      <div class="content-item">
        <div class="content-item-pro">
          <div class="mint-cell-title">
            <i class="icon"></i>
            <span class="mint-cell-text">网络延迟</span>
          </div>
          <mt-progress :value="60">
            <div slot="start">100</div>
            <div slot="end">1000</div>
          </mt-progress>
        </div>
      </div>
      <p class="content-item" style="margin-top: 10px;">
        <mt-cell
          title="代理的程序"
          to=""
          is-link
          :value="value2+'个'">
          <img slot="icon" src="../assets/dai.png" width="16" height="16">
        </mt-cell>
      </p>
      <p class="content-item" style="margin-bottom: 10px;">
        <mt-cell
          title="不代理的程序"
          to=""
          is-link
          :value="value3+'个'">
          <img slot="icon" src="../assets/no.png" width="16" height="16">
        </mt-cell>
      </p>
      <div class="mint-cell-wrapper content-item">
        <img slot="icon" src="../assets/auto.png" width="16" height="16" style="margin-right: 5px;">
        <div class="mint-cell-title">
          <span class="mint-cell-text">自动切换</span>
        </div>
        <div class="mint-cell-value">
          <label class="mint-switch">
            <input type="checkbox" class="mint-switch-input" @change="change">
            <span class="mint-switch-core"></span>
            <div class="mint-switch-label"></div>
          </label>
        </div>
      </div>
      <div class="mint-cell-wrapper content-item">
        <img slot="icon" src="../assets/all.png" width="16" height="16" style="margin-right: 5px;">
        <div class="mint-cell-title">
          <span class="mint-cell-text">全局代理</span>
        </div>
        <div class="mint-cell-value">
          <label class="mint-switch">
            <input type="checkbox" class="mint-switch-input" @change="change">
            <span class="mint-switch-core"></span>
            <div class="mint-switch-label"></div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        value: '',
        value1: 18,
        value2: 8,
        value3: 5,
        count: this.$store.local ? this.$store.local : '',
        ping: this.$store.ping ? this.$store.ping : 0,
        proData: [
          {
            'name': '广东广州'
          }, {
            'name': '天河网通'
          }, {
            'name': '海珠网通'
          }, {
            'name': '广东深圳'
          }, {
            'name': '南山网通'
          }, {
            'name': '福田电信'
          }, {
            'name': '浙江杭州'
          }, {
            'name': '广西南宁'
          }
        ]
      }
    },
    computed: {
      link: function () {
        if (this.count === '') {
          return '未连接'
        }
        if (this.count[0] !== '广东广州' || this.count[0] !== '广东深圳') {
          return this.count[0]
        }
        return this.count[1]
      }
    },
    methods: {
      // 开关
      change: function () {
        console.log(event.currentTarget)
      }
    },
    beforeRouteEnter(to, from, next) {
      // to.params.count
      next()
    }
  }
</script>

<style>
  body {
    height: 100%;
    background-color: #f1f1f1;
  }

  .header {
    background-color: #013399;
    color: #fff;
  }

  .header .top {
    text-align: center;
    font-size: 14px;
    padding: 8px 0;
  }

  .header .start {
    text-align: center;
    margin: 18px 0 6px;
  }

  .header .next {
    text-align: center;
  }

  .header .next .mint-button--small {
    height: 20px;
    margin-bottom: 20px;
    background-color: #013399;
    border-color: #fff;
    color: #fff;
  }

  .header .now-load {
    text-align: center;
    padding-bottom: 20px;
    font-size: 14px;
  }

  .header .ping {
    display: inline-block;
    padding: 2px 8px;
    margin: 0 8px;
    background-color: #fff;
    border-radius: 3px;
    color: #333333;
  }

  .header .box {
    margin-left: 8px;
  }

  .header .link {
    padding: 2px 6px;
    margin-left: 10px;
    border: 1px solid #fff;
    border-radius: 3px;
  }

  .now-load a {
    color: #fff;
  }

  .content {
    background-color: #f1f1f1;
  }

  .content-item {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
  .content-item .content-item-pro{
    display: flex;
    padding: 0 10px;
  }
  .content-item .content-item {
    display: inline;
  }
  .content-item .mint-cell-title{
    height: 48px;
    line-height: 48px;
  }
  .content-item .content-item-pro .icon{
    vertical-align: top;
    margin-top: 16px;
    height: 16px;
    width: 16px;
    display: inline-block;
    background: url("../assets/progress.png") no-repeat 0 0;
    background-size: 16px 16px;
  }
  .content-item .content-item-pro .mint-cell-text{
    vertical-align: top;
    line-height: 48px;
  }
  .content-item .mt-progress {
    flex: 1;
    height: 48px;
    line-height: 48px;
  }

  .content .mint-cell-wrapper {
    height: 48px;
    background-image: none;
  }
  .content-item .mint-cell:last-child{
    background-image: none;
  }
</style>
