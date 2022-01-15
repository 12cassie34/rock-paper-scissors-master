<script setup>
import TheSignsVue from "./TheSigns.vue";
</script>

<template>
  <div class="relative mt-24 mb-22 mx-auto max-w-sm h-80">
    <div>
      <div
        class="relative your-picked"
        :class="{ 'game-result': showHousePicked }"
      >
        <TheSignsVue
          :sign="yourSign"
          class="your-picked absolute left-5 z-10"
        />
        <div
          v-if="gameResult === 'win'"
          v-show="showHousePicked"
          class="sign-bg-container your-picked absolute left-5 z-0 lg:left-1"
        >
          <div
            class="
              sign-bg
              absolute
              bg-dark
              opacity-60
              w-40
              h-40
              lg:w-64 lg:h-64
            "
          ></div>
          <div
            class="
              sign-bg
              absolute
              bg-dark
              opacity-40
              w-60
              h-60
              lg:w-96 lg:h-96
            "
          ></div>
          <div class="sign-bg absolute bg-dark opacity-20 w-80 h-80"></div>
        </div>
        <h2
          class="
            picked-title
            absolute
            top-32
            left-8
            uppercase
            tracking-wider
            text-white text-base
            lg:text-xl lg:w-full lg:left-4
          "
        >
          Your Picked
        </h2>
      </div>
      <div
        class="relative house-picked"
        :class="{ 'game-result': showHousePicked }"
      >
        <div
          v-show="!showHousePicked"
          class="absolute right-8 z-10 bg-dark w-28 h-28 rounded-full lg:w-48 lg:h-48"
        ></div>
        <TheSignsVue
          v-show="showHousePicked"
          :sign="houseSign"
          class="house-picked absolute right-8 z-10"
        />
        <div
          v-if="gameResult === 'lose'"
          v-show="showHousePicked"
          class="sign-bg-container absolute left-60 z-0 lg:left-52"
        >
          <div
            class="
              sign-bg
              absolute
              bg-dark
              opacity-60
              w-40
              h-40
              lg:w-64 lg:h-64
            "
          ></div>
          <div
            class="
              sign-bg
              absolute
              bg-dark
              opacity-40
              w-60
              h-60
              lg:w-96 lg:h-96
            "
          ></div>
          <div class="sign-bg absolute bg-dark opacity-20 w-80 h-80"></div>
        </div>
        <h2
          class="
            picked-title
            absolute
            top-32
            left-56
            uppercase
            tracking-wider
            text-white text-base
            lg:text-xl lg:w-full lg:left-60
          "
        >
          The House Picked
        </h2>
      </div>
    </div>
    <div
      v-show="showHousePicked"
      class="absolute flex flex-col justify-center mt-60 w-full lg:mt-4"
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

@media (min-width: 1024px) {
  .your-picked {
    left: -2rem;
  }

  .house-picked {
    right: -2rem;
  }

  .house-picked div:first-child {
    right: -2rem;
  }

  .picked-title {
    top: -3rem;
  }

  .your-picked.game-result {
    left: -8rem;
    transition: all 1s ease-out;
  }

  .house-picked.game-result {
    right: -8rem;
    transition: all 1s ease-out;
  }

  .sign-bg-container.your-picked {
    left: -3rem;
  }

  .sign-bg-container .sign-bg[data-v-3fb7e734]:first-child {
    left: -0.9rem;
    top: -1.7rem;
  }

  .sign-bg-container .sign-bg[data-v-3fb7e734]:nth-child(2) {
    left: -5rem;
    top: -5.5rem;
  }

  .sign-bg-container .sign-bg[data-v-3fb7e734]:last-child {
    left: -8rem;
    top: -8rem;
    width: 30rem;
    height: 30rem;
  }
}
</style>