<template>
  <div
    class="outer-border flex justify-center items-center w-36 h-36 rounded-full"
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
  background: linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
    border-box;
}
.inner-container {
  box-shadow: inset 0px 10px 0px -5px rgb(0 0 0 / 20%);
}
</style>