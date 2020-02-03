import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainTitle: '',
    showBackButton: true,
    backButton: false
  },
  getters: {
    getMainTitle(state) {
      return state.mainTitle;
    }
  },
  mutations: {
    mainTitle(state, title) {
      state.mainTitle = title;
    },
    goBack(state) {
      state.backButton = !state.backButton;
    }
  },
  actions: {

  }
})
