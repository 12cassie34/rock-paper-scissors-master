<template>
  <div
    class="
      flex
      justify-around
      my-0
      mx-auto
      p-2.5
      border-gray border-2
      rounded-lg
      w-10/12
    "
  >
    <div class="flex items-center text-xl text-white font-semibold">
      <p class="game-name w-2/4 break-words leading-4">{{ gameName }}</p>
    </div>
    <div
      class="flex flex-col items-center px-6 py-2 rounded bg-white font-bold"
    >
      <p class="text-navy text-xs">SCORE</p>
      <p class="text-dark text-4xl">{{ score }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  setup() {},
  computed: mapState(["gameName", "score"]),
};
</script>