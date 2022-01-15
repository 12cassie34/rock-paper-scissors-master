<template>
  <div
    class="
      sign-container
      outer-border
      flex
      justify-center
      items-center
      w-28
      h-28
      rounded-full
      cursor-pointer
      lg:w-32 lg:h-32
    "
    :class="[sign.bgColor, { 'game-started': isGameStarted }]"
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
        lg:w-24 lg:h-24
      "
    >
      <img class="w-9 lg:w-12" :class="`img-${sign.name}`" :alt="sign.name" />
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
  computed: {
    isGameStarted() {
      return this.$store.getters.isGameStarted;
    }
  },
  mounted() {
    this.$nextTick(function () {
      const imgUrl = new URL(
        `../assets/${this.props.sign.image}`,
        import.meta.url
      ).href;

      const imgList = document.getElementsByClassName(
        `img-${this.props.sign.name}`
      );
      for (let img of imgList) {
        img.src = imgUrl;
      }
    });
  },
  methods: {
    pickASign(sign) {
      if (!this.$store.getters.isGameStarted) {
        this.$store.commit("pickASign", sign);
      }
    },
  },
};
</script>

<style scoped>
.sign-container.game-started {
    width: 12rem;
    height: 12rem;
}

.sign-container.game-started .inner-container {
    width: 10rem;
    height: 10rem;
}

.sign-container.game-started img {
    width: 5rem;
    height: 5rem;
}
</style>