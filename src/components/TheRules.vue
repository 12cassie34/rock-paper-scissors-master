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
    "
  >
    <button @click="openRules" href="#rules" class="">RULES</button>
  </div>
  <div
    id="rules"
    class="relative z-20 pt-9 pb-5 h-screen bg-white"
    :class="{ 'is-show': showRules }"
  >
    <h2 class="flex justify-center text-2xl font-extrabold text-background">
      RULES
    </h2>
    <img
      class="mt-14 mx-auto"
      :class="{ hidden: !showRules }"
      src="../assets/image-rules.svg"
      ref="Rules"
    />

    <button @click="closeRules" class="block my-12 mx-auto" href="#">
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
      window.scrollTo({top: 0, behavior: 'smooth'});

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
</style>