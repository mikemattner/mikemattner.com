<template>
  <div class="brand-logo">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">
      Mike<br />
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
    width: 3.5rem;
    height: 3.5rem;
    padding: 0;
    border-radius: 50%;
    background-color: var(--headline-font-color);
    z-index: 10;
    transition: var(--transition-cubic-slow);
    flex: 0 0 3.5rem;

    @media (max-width: 510px) {
      height: 3rem;
      width: 3rem;
      flex: 0 0 3rem;
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
    font-variation-settings: 'ital' 10, 'wdth' 75, 'wght' 700;
    letter-spacing: 0.0125em;
    transition: var(--transition-cubic-slow);
  }

  @media (min-width: 511px) {
    &:hover {
      .brand-logo__image {
        // border: 2px solid var(--color-primary);
        // background-color: var(--color-primary);
        transform: rotate(720deg);
        // .logo-shape {
        //   fill: var(--color-primary);
        // }
      }
      .brand-logo__type {
        font-variation-settings: 'ital' 0, 'wdth' 125, 'wght' 300;
        color: var(--headline-font-color);
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
