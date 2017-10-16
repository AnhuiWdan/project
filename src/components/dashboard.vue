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
        </mt-cell>
      </p>
      <p class="content-item">
        <mt-cell
          title="代理的程序"
          to=""
          is-link
          :value="value2+'个'">
        </mt-cell>
      </p>
      <p class="content-item">
        <mt-cell
          title="不代理的程序"
          to=""
          is-link
          :value="value3+'个'">
        </mt-cell>
      </p>
      <div class="mint-cell-wrapper content-item">
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
    <mt-tabbar v-model="selected">
      <mt-tab-item id="主页"><img slot="icon" src="../assets/index.png">主页</mt-tab-item>
      <mt-tab-item id="用户"><img slot="icon" src="../assets/user.png">用户</mt-tab-item>
      <mt-tab-item id="设置"><img slot="icon" src="../assets/setting.png">设置</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        selected: '主页',
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
    watch: {
      // footer tab 切换
      selected: function (val, oldVal) {
        console.log(val)
        console.log(oldVal)
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

  .content-item {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
  }

  .content .mint-cell-wrapper {
    height: 48px;
  }
</style>
