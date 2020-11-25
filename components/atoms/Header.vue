<template>
  <component
    :is="tag"
    :class="[
      decorator == true ? 'decorator' : '',
      center == true ? 'decorator--center' : '',
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h3',
    },
    decorator: Boolean,
    center: Boolean,
  },
}
</script>
