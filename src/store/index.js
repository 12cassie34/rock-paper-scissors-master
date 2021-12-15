import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      gameName: ""
    }
  },
  mutations: {
    changeGameName(state, game) {
      state.gameName = game;
    }
  }
})

export default store