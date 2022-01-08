import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      gameName: "ROCK PAPER SCISSORS",
      score: 12,
      yourSign: "",
      houseSign: "",
      signs: {
        thePaper: {
          name: "paper",
          image: "icon-paper.svg",
          shadowColor: "box-shadow: 0px 11px 0px -5px hsl(229, 64%, 46%)",
          bgColor: "bg-blueGradient",
        },
        theScissors: {
          name: "scissors",
          image: "icon-scissors.svg",
          shadowColor: "box-shadow: 0px 11px 0px -5px hsl(39 90% 38%)",
          bgColor: "bg-yellowGradient",
        },
        theRock: {
          name: "rock",
          image: "icon-rock.svg",
          shadowColor: "box-shadow: 0px 11px 0px -5px hsl(349, 71%, 52%)",
          bgColor: "bg-redGradient",
        },
      },
    };
  },
  getters: {
    isGameStarted(state) {
      if (state.yourSign !== "") return true;
      return false;
    },
    gameResult(state) {
      const paper = {
        paper: "tie",
        scissors: "lose",
        rock: "win",
      };
      const scissors = {
        paper: "win",
        scissors: "tie",
        rock: "lose",
      };
      const rock = {
        paper: "lose",
        scissors: "win",
        rock: "tie",
      };

      switch (state.yourSign.name) {
        case "paper":
          return paper[state.houseSign.name];
        case "scissors":
          return scissors[state.houseSign.name];
        case "rock":
          return rock[state.houseSign.name];
        default:
          return null;
      }
    },
  },
  mutations: {
    changeGameName(state, game) {
      state.gameName = game;
    },
    pickASign(state, sign) {
      state.yourSign = sign;
    },
    houseSign(state) {
      const signArr = Object.keys(state.signs);
      const signKey = signArr[Math.floor(Math.random() * signArr.length)];
      state.houseSign = state.signs[signKey];
    },
    addScore(state) {
      console.log("fire");
      state.score += 1;
    }
  },
});

export default store;
