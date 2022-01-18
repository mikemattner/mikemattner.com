<template>
  <figure :class="classes">
    <VLazyImage
      :src="`/img/${src}`"
      :alt="alt"
      :src-placeholder="placeholder"
      :class="classes"
    />
    <figcaption v-if="caption" :class="classes" v-html="caption"></figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      default: '',
      type: String,
      required: false,
    },
    caption: {
      default: '',
      type: String,
      required: false,
    },
    rounded: {
      default: false,
      type: Boolean,
      required: false,
    },
    circle: {
      default: false,
      type: Boolean,
      required: false,
    },
    square: {
      default: false,
      type: Boolean,
      required: false,
    },
    overlay: {
      default: false,
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      placeholder: 'img/Rectangle.png',
    }
  },
  computed: {
    classes() {
      return {
        rounded: this.rounded,
        circle: this.circle,
        square: this.square,
        overlay: this.overlay,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
figure {
  padding: 0;
  margin: 0;
  position: relative;

  figcaption {
    color: $middleGray;
    font-size: $small;
    padding: 0 math.div($defaultPadding, 2);
    text-align: right;
  }

  img {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  &.rounded {
    img {
      background-color: $black;
      border-radius: $radius-large;
      box-shadow: $boxShadowLarge;
    }
  }
  &.circle {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background-color: $black;
    border-radius: $radius-rounded;
    box-shadow: $boxShadowLarge;

    img {
      margin: 0;
      @include cover-background(center);
    }

    figcaption {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-image: $radialGradient;
      z-index: 3;
      color: $white;
      max-width: 80%;
      opacity: 0;
      transition: $transition;
      @include absolute-center;
    }

    &.overlay {
      &:after {
        content: '';
        @include absolute-center;
        background-image: $rightBottomGradient;
        mix-blend-mode: color;
        opacity: 1;
        transition: $transition-med;
        z-index: 2;
      }
      img {
        filter: grayscale(2);
        z-index: 1;
      }
    }

    &:hover {
      figcaption {
        opacity: 1;
      }
      &.overlay {
        img {
          filter: grayscale(0);
          z-index: 1;
        }
        &:after {
          opacity: 0;
        }
      }
    }
  }

  &.square {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background-color: $black;
    border-radius: $radius-large;
    box-shadow: $boxShadowLarge;

    img {
      margin: 0;
      @include cover-background(center);
    }

    figcaption {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      text-align: center;
      padding: $defaultPadding;
      background-image: $radialGradient;
      z-index: 3;
      color: $white;
      max-width: 80%;
      opacity: 0;
      transition: $transition;
      @include absolute-center;
    }

    &.overlay {
      &:after {
        content: '';
        @include absolute-center;
        background-image: $rightBottomGradient;
        mix-blend-mode: color;
        opacity: 1;
        transition: $transition-med;
        z-index: 2;
      }
      img {
        filter: grayscale(2);
        z-index: 1;
      }
    }

    &:hover {
      figcaption {
        opacity: 1;
      }
      &.overlay {
        img {
          filter: grayscale(0);
          z-index: 1;
        }
        &:after {
          opacity: 0;
        }
      }
    }
  }
}
</style>
