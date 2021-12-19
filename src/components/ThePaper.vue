<template>
  <div
    class="outer-border flex justify-center items-center w-36 h-36 rounded-full bg-blueGradient"
  >
    <div
      class="
        inner-container
        flex
        justify-center
        items-center
        bg-white
        w-28
        h-28
        rounded-full
      "
    >
      <img class="w-12" src="../assets/icon-paper.svg" alt="Paper" />
    </div>
  </div>
</template>

<style scoped>
.outer-border {
    box-shadow: 0px 11px 0px -5px hsl(229, 64%, 46%);
}
.inner-container {
  box-shadow: inset 0px 10px 0px -5px rgb(0 0 0 / 20%);
}
</style>