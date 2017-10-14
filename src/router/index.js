import Vue from 'vue'
import Router from 'vue-router'
import dash from '@/components/dashboard'
import reg from '@/components/reg'
import login from '@/components/login'
import find from '@/components/find'
import list from '@/components/list'
import img from '@/components/img'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dash/:count/:id',
      name: 'dash',
      component: dash
    },
    {
      path: '/reg',
      component: reg
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/img',
      name: 'img',
      component: img
    }
  ]
})
