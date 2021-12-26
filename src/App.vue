<script setup>
import GameAndScore from './components/GameAndScore.vue';
import GameIntroduction from './components/GameIntroduction.vue';
import TheRules from "./components/TheRules.vue";
</script>

<template>
<div class="container pt-8 pb-5 h-full bg-background font-barlow">
  <GameAndScore />
  <GameIntroduction />
  <TheRules />
</div>
</template>

<style>
.inner-container {
  box-shadow: inset 0px 10px 0px -5px rgb(0 0 0 / 20%);
}
</style>

<style scoped>
.container {
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
}
</style>
