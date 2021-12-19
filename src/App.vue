<script setup>
import GameAndScoreVue from './components/GameAndScore.vue';
import GameIntroductionVue from './components/GameIntroduction.vue';
</script>

<template>
<div class="container pt-8 h-screen font-barlow">
  <GameAndScoreVue />
  <GameIntroductionVue />
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
