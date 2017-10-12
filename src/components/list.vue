<template>
  <div class="list">
    <div class="list-header">
      <router-link :to="{ name: 'dash', params: { count , id}}">
        <i class="icon"></i>
      </router-link>
      <span class="count">选中{{count}}条</span>
      <i class="icon selected" @click="open"></i>
      <input type="checkbox" class="mint-checkbox" @click="selectAll">
    </div>
    <div class="list-selected" v-show="selectedShow">
      <ul>
        <li v-for="(items,index) in lists">
          <h1 class="title">
            <span style="width: 50%;display: inline-block" @click="changeDefault(index)">{{items.name}}</span>
            <span v-if="items.length>0" class="length"> {{checked[index].checked}}/{{items.length}}</span>
            <input type="checkbox" :value="items.name" class="mint-checkbox" v-model="selectArr"
                   @click="selectedChild($event, index)">
          </h1>
          <ul v-show="items.default">
            <li v-for="item in items.list" class="item">
              <div class="item-name">
                {{item.name}}
              </div>
              <div class="input">
                <input type="checkbox" :value="item.name" class="mint-checkbox" v-model="selectArr"
                       @click="checkBox($event, index, item.ping)">
              </div>
              <div class="ping">{{item.ping}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        selectedShow: true,
        checked: [
          {
            checked: 0
          },
          {
            checked: 0
          }
        ],
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
        ],
        lists: [
          {
            'name': '广东广州',
            'length': '2',
            'default': 'gd',
            'list': [
              {
                'name': '天河网通',
                'ping': '1',
                'default': 'th'
              },
              {
                'name': '海珠网通',
                'default': 'hz',
                'ping': '2'
              }
            ]
          },
          {
            'name': '广东深圳',
            'length': '2',
            'default': 'sz',
            'list': [
              {
                'name': '南山网通',
                'default': 'ns',
                'ping': '3'
              },
              {
                'name': '福田电信',
                'default': 'ft',
                'ping': '4'
              }
            ]
          },
          {
            'name': '浙江杭州',
            'default': 'hz',
            'ping': '5'
          },
          {
            'name': '广西南宁',
            'default': 'nn',
            'ping': '6'
          }
        ],
        selectArr: [],
        id: 0
      }
    },
    computed: {
      count: function () {
        return this.selectArr.length
      }
    },
    methods: {
      open() {
        this.selectedShow = !this.selectedShow
        let _this = event.currentTarget
        if (this.selectedShow) {
          _this.setAttribute('class', 'selected')
        } else {
          _this.setAttribute('class', 'sub')
        }
      },
      changeDefault(index) {
        if (this.lists[index].default) {
          this.lists[index].default = false
        } else {
          this.lists[index].default = true
        }
      },
      selectAll(event) {
        if (!event.currentTarget.checked) {
          this.selectArr = []
          this.checked[0].checked = 0
          this.checked[1].checked = 0
        } else {
          this.selectArr = []
          this.proData.forEach((item, i) => this.selectArr.push(item.name))
          this.checked[0].checked = 2
          this.checked[1].checked = 2
        }
      },
      selectedChild(event, index) {
        if (!event.currentTarget.checked) {
          if (this.lists[index].list) {
            let list = this.lists[index].list
            let len = list.length
            let name = list[0].name
            let indice = this.selectArr.indexOf(name)
            this.checked[index].checked = 0
            return this.selectArr.splice(indice, len)
          }
        } else {
          console.log(this.lists[index].list)
          if (this.lists[index].list) {
            let list = this.lists[index].list
            list.forEach(item => this.selectArr.push(item.name))
            this.id = list[0].ping
            this.checked[index].checked = this.lists[index].list.length
          }
        }
      },
      checkBox(event, index, ping) {
        console.log(this.selectArr)
        if (!event.currentTarget.checked) {
          console.log(event.target.value)
          this.checked[index].checked--
          if (this.checked[index].checked === 0) {
            let indice = this.selectArr.indexOf(this.lists[index].name)
            return this.selectArr.splice(indice, 1)
          }
        } else {
          this.checked[index].checked++
          this.id = ping
          if (this.checked[index].checked === 2) {
            return this.selectArr.push(this.lists[index].name)
          }
        }
      }
    }
  }
</script>

<style>
  .list-header {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 40px;
    background-color: #26a2ff;
    text-align: center;
    color: #fff;
  }

  .list-header .icon {
    display: inline-block;
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-top: 4px;
    margin-left: 8px;
    background: url("../assets/back.png") no-repeat 0 0;
    background-size: 32px 32px;
  }

  .list-header .count {
    display: inline-block;
    flex: 1;
    line-height: 40px;
  }

  .list-header .selected {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    background: url("../assets/add.png") no-repeat 0 0;
    flex: 0 0 20px;
    vertical-align: top;
    background-size: 20px 20px;
    margin-top: 10px;
  }

  .list-header .sub {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    background: url("../assets/sub.png") no-repeat 0 0;
    flex: 0 0 20px;
    vertical-align: top;
    background-size: 20px 20px;
    margin-top: 10px;
  }

  .mint-checkbox {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 10px;
    border: 1px solid #fff;
    background-color: #fff;
  }

  .list-selected {
    width: 100%;
    margin: 0 auto;
  }

  .list-selected .title {
    position: relative;
    height: 30px;
    margin-top: 10px;
    line-height: 30px;
    padding-left: 8px;
    background-color: #f1f1f1;
    border-left: 3px solid #bbb;
  }

  .title .length {
    float: right;
    margin-right: 100px;
  }

  .title .mint-checkbox {
    margin-top: 5px;
    position: absolute;
    right: 0;
  }

  .list-selected .item {
    margin-top: 10px;
    height: 30px;
    line-height: 30px;
  }

  .list-selected .item .item-name {
    float: left;
    margin-left: 12px;
  }

  .list-selected .item .input {
    float: right;
    vertical-align: top;
    margin-top: -5px;
  }

  .list-selected .ping {
    float: right;
    margin-right: 30px;
  }
</style>
