<template>
  <div class="brand-logo">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">Mike Mattner</div>
  </div>
</template>

<script setup lang="ts">
import PrimaryLogo from '~/assets/images/logo.svg'

const props = defineProps({
  showLabel: { type: Boolean, default: false },
})
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
    width: 1.75rem;
    height: 1.75rem;
    padding: 0;
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    background: transparent;
    z-index: 10;
    transition: var(--transition-cubic-slow);
    flex: 0 0 1.75rem;

    @media (max-width: 768px) {
      height: 2rem;
      width: 2rem;
      flex: 0 0 2rem;
    }

    .circle-shape {
      fill: transparent;
      transition: var(--transition-cubic-slow);
    }
    .logo-shape {
      fill: var(--color-primary);
      transition: var(--transition-cubic-slow);
    }
  }

  &__type {
    font-size: var(--size-step-0);
    font-weight: 400;
    transition: all 0.125s ease-in-out;
    line-height: 1.2;
    z-index: 9;
    // text-decoration: none;
    // text-transform: uppercase;
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
          fill: var(--color-dark);
        }
      }
    }
  }
}
</style>
