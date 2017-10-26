<template>
  <div class="img">
    <ul class="img-list">
      <li v-for="(item, index) in file" class="img-item" v-if="file.length > 0" @mouseover='openClose(index)'
          @mouseleave="closeIcon(index)">
        <img :src="item.src" :alt="item.title" :title="item.title" class="item-img">
        <transition name="fade">
          <i class="icon-close" v-show="item.close" @click="closeLi(index)"></i>
        </transition>
        <transition name="fade">
          <span class="item-title">{{item.title.substr(item.title.lastIndexOf('\\') + 1)}}</span>
        </transition>
      </li>
    </ul>
    <div class="add" ref="add">
      <input type="file" id="file" v-on:change="change" ref="files">
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
      closeIcon(index) {
        this.file[index].close = false
      },
      closeLi(index) {
        return this.file.splice(index, 1)
      },
      change: function () {
        let file = event.currentTarget.files[0]
        let val = event.currentTarget.value
        let files = this.$refs.files
        let reader = new FileReader()
        let src = ''
        let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png']
        if (file && supportedTypes.indexOf(file.type) >= 0) {
          reader.readAsDataURL(file)
          let _this = this.file
          reader.onload = function (e) {
            src = this.result
            _this.push({'src': src, 'title': val, 'close': false})
            files.value = ''
          }
        } else {
          alert('文件格式只支持：jpg、jpeg 和 png')
          return false
        }
      }
    }
  }
</script>

<style>
  .img {
    padding: 10px;
  }

  .img-list {
    display: inline-block;
  }

  .img-list .img-item {
    position: relative;
    float: left;
    width: 40px;
    height: 40px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .img-item .item-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all .2s;
  }

  .item-img:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.4);
  }

  .icon-close {
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 10px;
    padding: 4px;
    border-radius: 50%;
    background: rgba(7, 17, 27, 0.4) url("../assets/close.png") no-repeat center;
    background-size: 10px 10px;
  }


  .item-title {
    display: inline-block;
    width: 60px;
    height: 20px;
    line-height: 20px;
    margin-left: -10px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }

  .add {
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    width: 40px;
    height: 40px;
    padding: 20px;
    background: url("../assets/addpic.png") no-repeat center;
    background-size: 40px 40px;
  }

  #file {
    width: 40px;
    height: 40px;
    opacity: 0;
  }
</style>
