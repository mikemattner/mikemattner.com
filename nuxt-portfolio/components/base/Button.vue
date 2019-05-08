<template>
  <component :is="tag" :class="'button'" :href="href">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: [String, Object],
      default: 'button'
    },
    href: String
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid $white;

  &:focus {
    outline: 0;
    border-color: $orange;
  }

  &:hover {
    border-color: $darkBlue-5;
    background-color: $darkBlue-5;
    border-radius: 2px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    transform: scale(1.01);
  }
}
</style>
