<template>
  <header id="hero" :class="['hero layout', classes]">
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    center: Boolean,
    dark: Boolean,
    full: Boolean,
  },
  computed: {
    classes() {
      return {
        'hero--full': this.full,
        'hero--dark': this.dark,
        'hero--center': this.center,
      }
    },
  },
}
</script>

<style lang="scss">
.hero {
  padding-top: 6rem;
  position: relative;
  z-index: 100;
  overflow: hidden;
  background-color: $bodyBackground;
  background-image: $backGroundPattern;
  @media (min-width: $tablet) {
    padding-top: 8rem;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      rgba($bodyBackground, 1) 0%,
      rgba($bodyBackground, 0) 90%
    );
    z-index: 2;
  }

  &--full {
    min-height: 80vh;
    align-content: center;
  }
  &--dark {
    background-color: $darkShadeBackground;
    &:before {
      background-image: linear-gradient(
        to top,
        rgba($darkShadeBackground, 1) 0%,
        rgba($darkShadeBackground, 0) 90%
      );
    }
  }
  h1 {
    // color: $primary;
    margin-bottom: 2rem;
  }
  h2 {
    color: rgba($white, 0.5);
    font-weight: 400;
  }
  h1,
  h2,
  p,
  div {
    z-index: 100;
  }
}
</style>
