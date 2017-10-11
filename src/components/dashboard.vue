<template>
  <div id="app">
    <div class="header">
      <div class="top">主页</div>
      <div class="start"><img src="../assets/open.png" alt=""></div>
      <div class="next">
        <mt-button size="small">下一条</mt-button>
      </div>
      <p class="now-load">未连接</p>
    </div>
    <div class="content">
      <p class="content-item">
        <mt-cell
          title="选择路线"
          to=""
          is-link
          value="18条">
        </mt-cell>
      </p>
      <p class="content-item">
        <mt-cell
          title="代理的程序"
          to=""
          is-link
          value="8个">
        </mt-cell>
      </p>
      <p class="content-item">
        <mt-cell
          title="不代理的程序"
          to=""
          is-link
          value="5个">
        </mt-cell>
      </p>
      <div class="mint-cell-wrapper content-item">
        <div class="mint-cell-title">
          <span class="mint-cell-text">自动切换</span>
        </div>
        <div class="mint-cell-value">
          <label class="mint-switch">
            <input type="checkbox" class="mint-switch-input">
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
            <input type="checkbox" class="mint-switch-input">
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
    data () {
      return {
        selected: null
      }
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

  .content-item {
    overflow: hidden;
    border-bottom: 1px solid #ddd;
  }

  .content .mint-cell-wrapper {
    height: 48px;
  }
</style>
