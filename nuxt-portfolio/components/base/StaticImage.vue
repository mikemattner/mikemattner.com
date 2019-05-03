<template>
  <VLazyImage :src="src" :alt="alt" />
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
  }
}
</script>
