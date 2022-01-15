<script setup>
import TheSignsVue from "./TheSigns.vue";
</script>

<template>
  <div class="relative mt-24 mb-22 mx-auto max-w-sm h-80">
    <div>
      <div class="relative">
        <TheSignsVue :sign="yourSign" class="absolute left-5 z-10" />
        <div
          v-if="gameResult === 'win'"
          v-show="showHousePicked"
          class="sign-bg-container absolute left-5 z-0"
        >
          <div class="sign-bg absolute bg-dark opacity-60 w-40 h-40"></div>
          <div class="sign-bg absolute bg-dark opacity-40 w-60 h-60"></div>
          <div class="sign-bg absolute bg-dark opacity-20 w-80 h-80"></div>
        </div>
        <h2
          class="
            absolute
            top-32
            left-8
            uppercase
            tracking-wider
            text-white text-base
          "
        >
          Your Picked
        </h2>
      </div>
      <div class="relative">
        <div
          v-show="!showHousePicked"
          class="absolute right-8 z-10 bg-dark w-28 h-28 rounded-full"
        ></div>
        <TheSignsVue
          v-show="showHousePicked"
          :sign="houseSign"
          class="absolute right-8 z-10"
        />
        <div
          v-if="gameResult === 'lose'"
          v-show="showHousePicked"
          class="sign-bg-container absolute left-60 z-0"
        >
          <div class="sign-bg absolute bg-dark opacity-60 w-40 h-40"></div>
          <div class="sign-bg absolute bg-dark opacity-40 w-60 h-60"></div>
          <div class="sign-bg absolute bg-dark opacity-20 w-80 h-80"></div>
        </div>
        <h2
          class="
            absolute
            top-32
            left-56
            uppercase
            tracking-wider
            text-white text-base
          "
        >
          The House Picked
        </h2>
      </div>
    </div>
    <div
      v-show="showHousePicked"
      class="absolute flex flex-col justify-center mt-60 w-full"
    >
      <h1 class="uppercase text-center text-white text-5xl">
        You {{ $store.getters.gameResult }}
      </h1>
      <div class="flex justify-center">
        <button
          @click="playAgain"
          class="
            mt-6
            w-48
            h-12
            rounded-lg
            bg-white
            text-dark
            uppercase
            tracking-widest
          "
        >
          play again
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      showHousePicked: false,
    };
  },
  beforeCreate() {
    this.$store.commit("houseSign");
  },
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.showHousePicked = true;
        if (this.gameResult === "win") {
          this.$store.commit("addScore");
        }
        if (this.gameResult === "lose") {
          this.$store.commit("loseScore");
        }
      }, 2000);
    });
  },
  computed: {
    ...mapState({
      yourSign: (state) => state.yourSign,
      houseSign: (state) => state.houseSign,
    }),
    gameResult() {
      return this.$store.getters.gameResult;
    },
  },
  methods: {
    playAgain() {
      this.$store.commit("pickASign", "");
    },
  },
};
</script>

<style scoped>
.sign-bg-container .sign-bg:first-child {
  left: -1.4rem;
  top: -1.4rem;
}

.sign-bg-container .sign-bg:nth-child(2) {
  left: -4rem;
  top: -4rem;
}

.sign-bg-container .sign-bg:last-child {
  left: -6rem;
  top: -6rem;
}

.sign-bg {
  border-radius: 50%;
}
</style>