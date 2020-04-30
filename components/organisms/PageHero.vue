<template>
  <header
    :class="[
      'hero layout',
      full == true ? 'hero--full' : '',
      bold == true ? 'hero--bold' : '',
      dark == true ? 'hero--dark' : ''
    ]"
  >
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    full: Boolean,
    dark: Boolean,
    bold: Boolean,
    arrow: Boolean
  }
}
</script>

<style lang="scss">
.hero {
  padding-top: 6rem;
  position: relative;
  z-index: 100;
  @media (min-width: $tablet) {
    padding-top: 8rem;
  }
  // &--full {
  //   min-height: 100vh;
  //   padding-bottom: 4rem;
  // }
  // &--dark {
  //   background-color: $darkBlue-3;
  // }
  h1 {
    // color: $primary;
    margin-bottom: 2rem;
  }
  h2 {
    color: rgba($white, 0.5);
    font-weight: 400;
  }
  .anchor {
    display: flex;
    position: absolute;
    bottom: -5rem;
    height: 3rem;
    width: 3rem;
    left: 50%;
    transform: translateX(-50%);
    background-image: none;
    .bounce-arrow {
      display: block;
      height: 3rem;
      margin: 0 auto;
      &:before {
        @include arrow-down(rgba($primary, 1));
        animation: bounce 1.5s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
      }
    }
  }
}
</style>
