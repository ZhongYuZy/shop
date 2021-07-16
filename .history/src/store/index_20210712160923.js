import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:localStorage.getItem('city'),
    badge:localStorage.getItem('length')
  },
  mutations: {
    setCity(state , data) {
      state.city=data
    },
    setbadge(state , data){
     state.badge= data
    }
  },
  actions: {
  },
  modules: {
  }
})
