<template>
  <div class="flex justify-around my-0 mx-auto border-gray border-2 rounded-lg w-10/12">
    <div class="text-white font-bold">
        <p class="game-name w-2/4 break-words">{{ gameName }}</p>
    </div>
    <div>
      <p>SCORE</p>
      <p>{{ score }}</p>
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

<style scoped>
.game-name {
    line-height: .9rem;
}
</style>