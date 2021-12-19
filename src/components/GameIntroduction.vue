<script setup>
import TheSignsVue from "./TheSigns.vue";
</script>

<template>
  <TheSignsVue :sign="thePaper" />
  <TheSignsVue :sign="theScissors" />
  <TheSignsVue :sign="theRock" />
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