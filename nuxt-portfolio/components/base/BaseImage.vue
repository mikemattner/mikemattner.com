<template>
  <VLazyImage :src="$image(src)" :alt="alt" :src-placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      default: '',
      type: String,
      required: false
    }
  },
  data() {
    return {
      placeholder: '~/assets/img/Rectangle.png'
    }
  }
}
</script>

<style scoped>
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>
