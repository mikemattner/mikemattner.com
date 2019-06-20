<template>
  <header
    :class="[
      'hero',
      full == true ? 'hero--full' : '',
      dark == true ? 'hero--dark' : '',
      decorator == true ? 'header--decorator' : ''
    ]"
  >
    <div class="container">
      <slot></slot>
      <ScrollLink
        class="anchor"
        href="#content"
        aria-label="Scroll to the primary content."
      >
        <div v-if="arrow" class="bounce-arrow"></div>
      </ScrollLink>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    full: Boolean,
    dark: Boolean,
    arrow: Boolean
  }
}
</script>

<style lang="scss">
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
  z-index: 100;
  &--full {
    min-height: 100vh;
  }
  &--dark {
    background-color: $darkBlue-3;
  }
  h1 {
    font-size: 3rem;
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
  .container {
    position: relative;
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
        @include arrow-down(rgba($white, 0.25));
        animation: bounce 1.5s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
      }
    }
  }
}
</style>
