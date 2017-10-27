<template>
  <div class="list">
    <div class="list-header">
      <router-link to="/dash">
        <i class="icon"></i>
      </router-link>
      <span class="count">选中{{count}}条</span>
      <span class="input">
        <i class="el-icon-circle-check active" v-if="tree" @click="setCheckedNodes"></i>
        <i class="el-icon-circle-check" v-else @click="resetChecked"></i>
      </span>
    </div>
    <el-tree
      :data="data1"
      show-checkbox
      node-key="id"
      ref="tree"
      :default-expanded-keys="[1, 2, 3]"
      :render-content="renderContent"
      @check-change="change">
    </el-tree>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
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
        id: 0,
        count: 0,
        tree: true,
        active: 'active',
        data1: [
          {
            id: 1,
            label: '广东广州',
            children: [{
              id: 5,
              label: '天河网通',
              ping: '延时 8 ms'
            }, {
              id: 6,
              label: '海珠网通',
              ping: '延时 7 ms'
            }]
          },
          {
            id: 2,
            label: '广东深圳',
            children: [{
              id: 7,
              label: '南山网通',
              ping: '延时 100 ms'
            }, {
              id: 8,
              label: '福田电信',
              ping: '延时 78 ms'
            }]
          },
          {
            id: 3,
            label: '浙江杭州',
            ping: '延时 8 ms'
          },
          {
            id: 4,
            label: '广西南宁',
            ping: '延时 10 ms'
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    watch: {
      count() {
        if (this.count === 8) {
          this.tree = false
        }
      }
    },
    methods: {
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([
          {
            id: 1,
            label: '广东广州',
            children: [{
              id: 5,
              label: '天河网通'
            }, {
              id: 6,
              label: '海珠网通'
            }]
          },
          {
            id: 2,
            label: '广东深圳',
            children: [{
              id: 7,
              label: '南山网通'
            }, {
              id: 8,
              label: '福田电信'
            }]
          },
          {
            id: 3,
            label: '浙江杭州'
          },
          {
            id: 4,
            label: '广西南宁'
          }
        ])
        this.tree = !this.tree
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([])
        this.tree = !this.tree
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys())
      },
      change(data, node, store) {
        node ? ++this.count : --this.count
      },
      toggles() {
        this.tree = !this.tree
      },
      renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
              {data.children ? <span style="margin-left: 20px;color: #26a2ff">{data.children.length}</span> : <span></span>}
            </span>
            <span style="float: right; margin-right: 50px">{data.ping}</span>
          </span>
        )
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
  .list-header .input{
    width: 40px;
  }
  .list-header .input .el-icon-circle-check{
    cursor: pointer;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #fff;
  }
  .list-header .input .active{
    cursor: pointer;
    display: block;
    margin-top: 9px;
    margin-left: 10px;
    width: 20px;
    height: 21px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
  }
  .list-header .input .active:before{
    content: ' ';
  }
  .mint-checkbox {
    display: none;
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


  .list-selected .ping {
    float: right;
    margin-right: 30px;
  }
</style>
