import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ping: 0,
    local: []
  },
  mutations: {
    change: (state, data) => {
      state.ping = data.ping
      state.local = data.local
    }
  }
})
