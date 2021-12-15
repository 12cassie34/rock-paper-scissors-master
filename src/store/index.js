import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      gameName: "ROCK PAPER SCISSORS",
      score: 12
    }
  },
  mutations: {
    changeGameName(state, game) {
      state.gameName = game;
    }
  }
})

export default store