<template>
  <div class="primary-image">
    <BaseImage :src="src" class="primary-image__image" v-bind="{ ...attributes }" :class="classes">
      <template v-slot:caption>
        <slot name="caption"></slot>
      </template>
    </BaseImage>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: { type: String, required: true },
  hasOverlay: { type: Boolean, default: false },
  hasHover: { type: Boolean, default: false },
  alt: { type: String, default: null },
});

const attributes = computed(() => {
  return {
    alt: props.alt,
  };
});

const classes = computed(() => {
  return {
    'has-overlay': props.hasOverlay,
    'has-hover': props.hasHover,
  };
});

const slots = useSlots();
const hasSlot = (name: string) => {
  return !!slots[name];
};
</script>

<style lang="scss" scoped>
.primary-image__image {
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;

  :deep(img) {
    z-index: 1;
    position: relative;
    opacity: 1;
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
    transition: var(--transition-cubic);

    @media (min-width: 961px) {
      -o-object-position: top;
      object-position: top;
    }
  }

  :deep(figcaption) {
    position: absolute;
    bottom: var(--sizing-sm);
    right: var(--sizing-sm);
    z-index: 4;
    text-align: left;
    color: hsl(var(--color-white-hsl));
    font-size: var(--size-step--2);
    font-variation-settings: 'ital' 10;
  }

  &.has-overlay {
    :deep(img) {
      filter: grayscale(100%) invert(5%) saturate(350%) hue-rotate(351deg) brightness(105%) contrast(95%);
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
      mix-blend-mode: multiply;
      opacity: 0.75;
      z-index: 3;
      transition: var(--transition-cubic);
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
      mix-blend-mode: color-dodge;
      opacity: 1;
      z-index: 2;
      transition: var(--transition-cubic);
    }
  }

  &.has-hover {
    &:hover {
      &:after,
      &:before {
        opacity: 0;
      }

      :deep(img) {
        filter: none;
      }
    }
  }
}
</style>
