import Vue from 'vue'
import Router from 'vue-router'
import dash from '@/components/dashboard'
import reg from '@/components/reg'
import login from '@/components/login'
import find from '@/components/find'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '／dash'
    },
    {
      path: '/dash',
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
      component: list
    }
  ]
})
