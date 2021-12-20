<script setup>
import TheSignsVue from "./TheSigns.vue";
</script>

<template>
  <div class="relative my-28 h-96">
    <TheSignsVue :sign="thePaper" class="absolute left-5 z-10" />
    <div class="line absolute bg-background w-28 h-3 left-32 top-16"></div>
    <TheSignsVue :sign="theScissors" class="absolute right-8 z-10" />
    <div class="line absolute bg-background w-28 h-3 top-40 left-20"></div>
    <TheSignsVue :sign="theRock" class="absolute top-40 left-28 z-10" />
    <div class="line absolute bg-background w-28 h-3 top-40 right-24"></div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      thePaper: {
        name: "paper",
        image: "icon-paper.svg",
        shadowColor: "box-shadow: 0px 11px 0px -5px hsl(229, 64%, 46%)",
        bgColor: "bg-blueGradient",
      },
      theScissors: {
        name: "scissors",
        image: "icon-scissors.svg",
        shadowColor: "box-shadow: 0px 11px 0px -5px hsl(39 90% 38%)",
        bgColor: "bg-yellowGradient",
      },
      theRock: {
          name: "rock",
          image: "icon-rock.svg",
          shadowColor: "box-shadow: 0px 11px 0px -5px hsl(349, 71%, 52%)",
          bgColor: "bg-redGradient",
      }
    };
  },
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