<template>
  <header id="hero" :class="['hero layout', classes]">
    <slot></slot>
    <StaticImage
      v-if="image"
      :src="image"
      :alt="imageAlt"
      class="background-image"
    />
    <div v-if="arrow" class="anchor main-content" aria-hidden="true">
      <div class="bounce-arrow"></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    arrow: Boolean,
    center: Boolean,
    dark: Boolean,
    full: Boolean,
    image: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'hero--full': this.full,
        'hero--dark': this.dark,
        'hero--image': this.image,
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
  @media (min-width: $tablet) {
    padding-top: 8rem;
  }
  background-color: #17232a;
  background-image: $backGroundPattern;
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

  &--image {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-image: linear-gradient(
        to top,
        rgba($darkShadeBackground, 1) 0%,
        rgba($darkShadeBackground, 0) 100%
      );
      z-index: 2;
    }
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
        rgba($darkShadeBackground, 0) 50%
      );
    }
  }
  &--center {
    text-align: center;
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
  .anchor {
    display: flex;
    position: absolute;
    bottom: 0;
    height: 3rem;
    width: 3rem;
    left: 0;
    background-image: none;
    .bounce-arrow {
      display: block;
      height: 3rem;
      margin: 0;
      &:before {
        @include arrow-down(rgba($middleGray, 1));
        animation: bounce 1.5s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
      }
    }
  }
  .background-image {
    @include cover-background(top);
    z-index: 1;
    opacity: 0;
    &.v-lazy-image-loaded {
      opacity: 0.5;
    }
  }
}
</style>
