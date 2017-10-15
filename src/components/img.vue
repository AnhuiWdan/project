<template>
  <div class="img">
    <ul class="img-list">
      <li v-for="(item, index) in file" class="img-item" v-if="file.length > 0" @mouseover='openClose(index)' @mouseleave="closeIcon(index)">
        <img :src="item.src" :alt="item.title" :title="item.title" class="item-img">
        <transition name="fade">
          <i class="icon-close" v-show="item.close" @click="closeLi(index)"></i>
        </transition>
        <transition name="fade">
          <span v-if="item.close" class="item-title">{{item.title}}</span>
        </transition>
      </li>
    </ul>
    <div class="add">
      <input type="file" id="file" v-on:change="change">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        file: [],
        close: false
      }
    },
    methods: {
      openClose(index) {
        this.file[index].close = true
      },
      closeIcon (index) {
        this.file[index].close = false
      },
      closeLi (index) {
        this.file.splice(index, 1)
      },
      change: function () {
        let file = event.currentTarget.files[0]
        let val = event.currentTarget.value
        let reader = new FileReader()
        let src = ''
        let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png']
        if (file && supportedTypes.indexOf(file.type) >= 0) {
          reader.readAsDataURL(file)
          let _this = this.file
          reader.onload = function (e) {
            src = this.result
            _this.push({'src': src, 'title': val, 'close': false})
          }
        } else {
          alert('文件格式只支持：jpg、jpeg 和 png')
          this.clearFile()
        }
      },
      clearFile() {
        this.file = null
      }
    }
  }
</script>

<style>
  .img{
    padding: 10px;
  }
  .img-list {
    display: inline-block;
  }

  .img-list .img-item {
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  .img-item .item-img {
    width: 100%;
    height: 100%;
  }

  .icon-close {
    position: absolute;
    cursor: pointer;
    top: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    padding: 6px;
    background: url("../assets/close.png") no-repeat center;
    -webkit-background-size: 16px 16px;
    background-size: 16px 16px;
  }

  .icon-close:hover {
    background-color: #fff;
  }
  .item-title{
    display: inline-block;
    width: 100px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .add {
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    width: 100px;
    height: 100px;
    background: url("../assets/addpic.png") no-repeat 0 0;
    -webkit-background-size: 100px 100px;
    background-size: 100px 100px;
  }

  #file {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
</style>
