<template>
  <div class="brand-logo">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">
      Mike<br class="desktop-only" />
      Mattner
    </div>
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
    width: 4rem;
    height: 4rem;
    padding: 0;
    border-radius: 50%;
    // border: 1px solid var(--color-middle-gray);
    background-color: var(--headline-font-color);
    z-index: 10;
    transition: var(--transition-cubic-slow);
    flex: 0 0 4rem;

    @media (max-width: 510px) {
      height: 1.5rem;
      width: 1.5rem;
      flex: 0 0 1.5rem;
    }

    .circle-shape {
      fill: var(--color-primary);
      transition: var(--transition-cubic-slow);
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
    font-variation-settings: 'ital' 25, 'wdth' 70, 'wght' 700;
    letter-spacing: 0.0125em;
  }

  @media (min-width: 511px) {
    &:hover {
      .brand-logo__image {
        // border: 2px solid var(--color-primary);
        // background-color: var(--color-primary);
        transform: rotate(720deg);
        // .circle-shape {
        //   fill: var(--color-primary);
        // }
        // .logo-shape {
        //   fill: var(--color-primary);
        // }
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
