import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      gameName: "ROCK PAPER SCISSORS",
      score: 12,
      yourSign: "",
      houseSign: ""
    }
  },
  getters: {
    isGameStarted(state) {
      if (state.yourSign !== "") return true;
      return false;
    }
  },
  mutations: {
    changeGameName(state, game) {
      state.gameName = game;
    },
    pickASign(state, sign) {
      state.yourSign = sign
    },
    houseSign(state, sign) {
      state.houseSign = sign
    }
  }
})

export default store