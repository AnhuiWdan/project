<template>
  <div id="app">

    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="主页">

      </mt-tab-container-item>
      <mt-tab-container-item id="用户">
        <router-link to="user"></router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="设置">
        <router-link to="set"></router-link>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="主页">
        <router-link to="dash"></router-link>
        <img slot="icon" src="./assets/index.png">主页
      </mt-tab-item>
      <mt-tab-item id="用户">
        <router-link to="user"></router-link>
        <img slot="icon" src="./assets/user.png">用户
      </mt-tab-item>
      <mt-tab-item id="设置">
        <router-link to="set"></router-link>
        <img slot="icon" src="./assets/setting.png">设置
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        selected: '主页'
      }
    },
    watch: {
      // footer tab 切换
      selected: function (val, oldVal) {
        console.log(val)
        console.log(oldVal)
      }
    }
  }
</script>

<style scoped>
  .mint-tab-item{
    position: relative;
  }
  .mint-tab-item-label a{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
