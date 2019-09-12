<template>
  <component :is="tag" :class="{ decorator: decorator }">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h3'
    },
    decorator: Boolean
  }
}
</script>
