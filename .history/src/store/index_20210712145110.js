import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:localStorage.getItem('city'),
    badge:localStorage.getItem(' badge')
  },
  mutations: {
    setCity(state , data) {
      state.city=data
      state. badge
    }
  },
  actions: {
  },
  modules: {
  }
})
