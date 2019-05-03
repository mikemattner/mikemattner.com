<template>
  <header :class="['hero', full == true ? 'hero--full' : '']">
    <div class="hero-copy">
      <div
        :class="['hero--header', decorator == true ? 'header--decorator' : '']"
      >
        <slot></slot>
      </div>
    </div>
    <div v-if="arrow" class="bounce-arrow"></div>
  </header>
</template>

<script>
export default {
  props: {
    full: Boolean,
    arrow: Boolean,
    decorator: Boolean
  }
}
</script>

<style scoped lang="scss">
.hero {
  font-size: 1.25rem;
  min-height: 65vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: relative;
  &--full {
    min-height: 100vh;
  }
  .hero--header {
    h1 {
      font-size: 4rem;
      letter-spacing: 0.09rem;
      line-height: 1;
      small {
        display: block;
        font-family: $sans-serif-font;
        font-size: 1.25rem;
        font-weight: 400;
        color: $darkBlue-9;
        text-transform: uppercase;
        margin-bottom: 1.25rem;
      }
      @media (min-width: 760px) {
        font-size: 5rem;
      }
    }
    h2 {
      color: rgba($white, 0.5);
      font-weight: 400;
    }
    &.header--decorator {
      h1 {
        padding-bottom: 2rem;
        position: relative;

        &:after {
          content: '';
          display: block;
          position: absolute;
          width: 3rem;
          height: 1px;
          left: 0;
          bottom: 0;
          background-color: $orange;
        }
      }
    }
  }
  .bounce-arrow {
    display: block;
    position: absolute;
    bottom: 3rem;
    height: 3rem;
    // cursor: pointer;

    &:before {
      @include arrow-down(rgba($white, 0.25));
      // @include arrow-right($white);
      animation: bounce 1.5s;
      // animation: bounceRight 1.5s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
    }
  }
}
</style>
