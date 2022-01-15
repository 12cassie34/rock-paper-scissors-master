<script setup>
import TheSignsVue from "./TheSigns.vue";
</script>

<template>
  <div
    class="
      flex
      justify-center
      items-center
      mt-40
      mx-auto
      border border-solid border-white
      rounded
      h-10
      w-32
      text-white text-base
      tracking-widest
      lg:mt-0 lg:mr-8
    "
  >
    <button @click="openRules" href="#rules" class="">RULES</button>
  </div>
  <div
    @click="closeRules"
    class="wrapper hidden lg:block"
    :class="{ 'is-show': showRules }"
  ></div>
  <div
    id="rules"
    class="relative z-20 pt-9 pb-5 h-screen bg-white lg:pt-0 lg:pb-5 lg:pt-8"
    :class="{ 'is-show': showRules }"
  >
    <h2
      class="
        flex
        justify-center
        text-2xl
        font-extrabold
        text-background
        lg:justify-start lg:ml-8 lg:text-2xl
      "
    >
      RULES
    </h2>
    <img
      class="mt-14 mx-auto"
      :class="{ hidden: !showRules }"
      src="../assets/image-rules.svg"
      ref="Rules"
    />

    <button
      @click="closeRules"
      class="
        block
        my-12
        mx-auto
        lg:mt-0 lg:mb-0 lg:absolute lg:right-8 lg:top-10
      "
      href="#"
    >
      <img
        :class="{ hidden: !showRules }"
        src="../assets/icon-close.svg"
        alt="Close"
      />
    </button>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      showRules: false,
    };
  },
  methods: {
    openRules() {
      this.showRules = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    closeRules() {
      this.showRules = false;
    },
  },
};
</script>

<style scoped>
#rules {
  visibility: hidden;
  height: 0;
  transition: all 1s ease-out;
}
#rules.is-show {
  visibility: visible;
  height: 100vh;
  transform: translateY(-145%);
  transition: all 1s ease-out;
}

.wrapper.is-show {
  visibility: visible;
}

@media (min-width: 1024px) {
  #rules {
    transition: none;
  }
  #rules.is-show {
    transform: none;
    width: 25rem;
    height: 26rem;
    position: fixed;
    top: 7rem;
    left: 35vw;
  }

  .wrapper.is-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.4;
  }
}
</style>