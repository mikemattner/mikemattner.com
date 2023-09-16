<template>
  <div class="brand-logo">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">Mike Mattner</div>
  </div>
</template>

<script setup lang="ts">
import PrimaryLogo from '~/assets/images/logo.svg';

const props = defineProps({
  showLabel: { type: Boolean, default: false },
});
</script>

<style lang="scss">
.brand-logo {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: var(--transition);
  padding: 0;
  gap: 0.5rem;

  &__image {
    width: 2rem;
    height: 2rem;
    padding: 0;
    border-radius: 50%;
    background-color: var(--headline-font-color);
    z-index: 10;
    transition: var(--transition-cubic-slow);
    flex: 0 0 2rem;

    @media (max-width: 510px) {
      height: 1.75rem;
      width: 1.75rem;
      flex: 0 0 1.75rem;
    }

    .logo-shape {
      fill: var(--background-color);
      transition: var(--transition-cubic-slow);
    }
  }

  &__type {
    font-size: var(--size-step-1);
    transition: all 0.125s ease-in-out;
    line-height: 1;
    font-variation-settings: 'wdth' 65, 'wght' 400;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    transition: var(--transition-cubic-slow);
    color: var(--headline-font-color);
  }

  @media (min-width: 511px) {
    &:hover {
      color: var(--headline-font-color);

      .brand-logo__image {
        // border: 2px solid var(--color-primary);
        background-color: var(--color-primary);
        transform: rotate(720deg);
        // .logo-shape {
        //   fill: var(--color-highlight);
        // }
      }
      .brand-logo__type {
        // font-variation-settings: 'ital' 0, 'wdth' 125, 'wght' 300;
        // color: var(--headline-font-color);
        color: var(--color-primary);
      }
    }
  }
  @media (max-width: 510px) {
    .desktop-only {
      display: none;
    }
  }
}
</style>
