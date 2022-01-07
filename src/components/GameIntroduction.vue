<script setup>
import TheSignsVue from "./TheSigns.vue";
</script>

<template>
  <div class="relative mt-24 mb-22 mx-auto max-w-sm h-80">
    <TheSignsVue :sign="thePaper" class="absolute left-5 z-10" />
    <div class="line absolute bg-background w-32 h-3 left-32 top-16"></div>
    <TheSignsVue :sign="theScissors" class="absolute right-8 z-10" />
    <div class="line absolute bg-background w-32 h-3 top-32 left-20"></div>
    <TheSignsVue :sign="theRock" class="absolute top-40 left-32 z-10" />
    <div class="line absolute bg-background w-32 h-3 top-32 right-24"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  setup() {},
  data() {
    return {};
  },
  computed: mapState({
    thePaper: (state) => state.signs.thePaper,
    theScissors: (state) => state.signs.theScissors,
    theRock: (state) => state.signs.theRock,
  }),
};
</script>

<style scoped>
.line:nth-child(4) {
  transform: rotate(60deg);
}

.line:last-child {
  transform: rotate(120deg);
}
</style>