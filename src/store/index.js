import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    surname: ''
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload.name
    },

    changeSurname(state, payload) {
      state.surname = payload.surname
    }
  },
  getters: {
    fullname: state => {
      return `${state.name} ${state.surname}`
    }
  },
  actions: {
  },
  modules: {
  }
})
