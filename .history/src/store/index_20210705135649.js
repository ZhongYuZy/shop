import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:localStorage.getItem('city')
  },
  mutations: {
    setCity(state , data) {
      state.
    }
  },
  actions: {
  },
  modules: {
  }
})
