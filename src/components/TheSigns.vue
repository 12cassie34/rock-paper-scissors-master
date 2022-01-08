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
    @click="pickASign(sign)"
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
      <img class="w-9" :class="`img-${sign.name}`" :alt="sign.name" />
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

      const imgList = document.getElementsByClassName(`img-${this.props.sign.name}`);
      for (let img of imgList) {
          img.src= imgUrl;
      }
    });
  },
  methods: {
    pickASign(sign) {
      if (!this.$store.getters.isGameStarted) {
        this.$store.commit("pickASign", sign)
      }
    }
  }
};
</script>