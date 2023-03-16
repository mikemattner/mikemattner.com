<template>
  <figure class="static-image">
    <img :src="`${src}`" :alt="alt" :width="width" :height="height" />
    <figcaption v-if="caption" v-html="caption"></figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    default: '',
    type: String,
    required: false,
  },
  width: {
    default: null,
    type: String,
    required: false,
  },
  height: {
    default: null,
    type: String,
    required: false,
  },
  caption: {
    default: '',
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.static-image {
  padding: 0;
  margin: 0;
  position: relative;

  figcaption {
    font-size: var(--size-step--1);
    padding: 0 var(--sizing-sm);
    text-align: right;
    margin-top: var(--sizing-sm);
    margin-bottom: var(--sizing-sm);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
