<script setup>
import GameAndScoreVue from './components/GameAndScore.vue';
</script>

<template>
<div class="container pt-8 h-screen font-barlow">
  <GameAndScoreVue />
</div>
</template>

<style scoped>
.container {
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
}
</style>
