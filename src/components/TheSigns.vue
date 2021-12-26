<template>
  <div
    class="
      outer-border
      flex
      justify-center
      items-center
      w-28
      h-28
      rounded-full
    "
    :class="sign.bgColor"
    :style="sign.shadowColor"
  >
    <div
      class="
        inner-container
        flex
        justify-center
        items-center
        bg-white
        w-20
        h-20
        rounded-full
      "
    >
      <img class="w-9" :id="`img-${sign.name}`" alt="Paper" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sign: Object,
  },
  setup(props) {
    return {
      props,
    };
  },
  mounted() {
    this.$nextTick(function () {
      const imgUrl = new URL(
        `../assets/${this.props.sign.image}`,
        import.meta.url
      ).href;

      document.getElementById(`img-${this.props.sign.name}`).src = imgUrl;
    });
  },
};
</script>