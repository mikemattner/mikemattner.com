<template>
  <div class="brand-logo" :class="{ large: logoLarge }">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">Mike Mattner</div>
  </div>
</template>

<script setup lang="ts">
import PrimaryLogo from '~/assets/images/logo.svg';

const props = defineProps({
  showLabel: { type: Boolean, default: false },
  logoLarge: { type: Boolean, default: false },
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
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    z-index: 10;
    transition: var(--transition-cubic-slow);
    flex: 0 0 1.5rem;

    @media (max-width: 768px) {
      height: 1.5rem;
      width: 1.5rem;
      flex: 0 0 1.5rem;
    }

    .circle-shape {
      fill: var(--color-primary);
      transition: var(--transition-cubic-slow);
    }
    .logo-shape {
      fill: var(--color-light);
      transition: var(--transition-cubic-slow);
    }
  }

  &__type {
    font-size: 1rem;
    transition: all 0.125s ease-in-out;
    line-height: 1;
    font-variation-settings: 'wdth' 90;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &.large {
    .brand-logo__image {
      width: 1.5rem;
      height: 1.5rem;
      flex: 0 0 1.5rem;
    }
  }
  @media (min-width: 769px) {
    &:hover {
      .brand-logo__image {
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        transform: rotate(720deg);
        .circle-shape {
          fill: var(--color-primary);
        }
        .logo-shape {
          fill: var(--color-light);
        }
      }
    }
  }
}
</style>
