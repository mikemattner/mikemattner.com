<template>
  <div class="profile-image">
    <BaseImage :src="image" class="profile-image__image" :class="{ 'is-circle': isCircle, 'is-blob': isBlob }" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: { type: String, required: true },
  isCircle: { type: Boolean, default: false },
  isBlob: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped>
.profile-image__image {
  z-index: 1;
  overflow: hidden;
  border-radius: var(--sizing-sm);
  width: 100%;
  height: 100%;

  &.is-circle {
    border-radius: 50%;
  }

  &.is-blob {
    mask-image: url(/images/blob.svg);
  }

  :deep(img) {
    mix-blend-mode: multiply;
    z-index: 2;
    position: relative;
    opacity: 0.8;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: top;
    object-position: top;
    font-family: 'object-fit: cover; object-position: center';
    width: 100%;
    height: 100%;

    @media (min-width: 961px) {
      -o-object-position: top;
      object-position: top;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: var(--gradient-1);
    mix-blend-mode: normal;
    opacity: 0.8;
    z-index: 3;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: var(--image-background);
    mix-blend-mode: color;
    opacity: 1;
    z-index: 1;
  }
}
</style>
