<template>
  <figure>
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

  figcaption {
    color: $middleGray;
    font-size: $small;
    padding: 0 math.div($defaultPadding, 2);
    text-align: right;

    &.circle {
      text-align: center;
      border-radius: $radius-rounded;
    }
    &.rounded {
      border-radius: $radius-large;
    }
  }

  img {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    &.rounded {
      background-color: $black;
      border-radius: $radius-large;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
        0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11),
        0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 64px rgba(0, 0, 0, 0.11);
    }
    &.circle {
      background-color: $black;
      border-radius: $radius-rounded;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
        0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11),
        0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 64px rgba(0, 0, 0, 0.11);
    }
  }
}
</style>
