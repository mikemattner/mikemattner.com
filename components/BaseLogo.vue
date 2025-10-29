<template>
  <div class="brand-logo">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">Mike Mattner</div>
  </div>
</template>

<script setup lang="ts">
import PrimaryLogo from '~/assets/images/logo.svg';
// import PrimaryLogo from '~/assets/images/MM_Logo.svg';

defineProps({
  showLabel: { type: Boolean, default: false },
});
</script>

<style lang="scss">
.brand-logo {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  transition: var(--transition);
  padding: 0;
  gap: var(--sizing-sm);
  z-index: 1000;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border-radius: 50%;
    border: 1px solid var(--logo-background);
    z-index: 10;
    transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.25s var(--cubic-bezier),
      fill 0.25s var(--cubic-bezier), border-color 0.25s var(--cubic-bezier);
    flex: 0 0 1.5rem;

    @media (max-width: 510px) {
      height: 1.25rem;
      width: 1.25rem;
      flex: 0 0 1.25rem;
    }

    path {
      fill: var(--logo-background);
      transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.25s var(--cubic-bezier),
        fill 0.25s var(--cubic-bezier);
    }
  }

  &__type {
    font-size: var(--size-step-0);
    line-height: 1;
    letter-spacing: 0.025em;
    color: var(--headline-font-color);
    font-variation-settings: 'wdth' 100, 'wght' 300;
    transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.25s var(--cubic-bezier),
      fill 0.25s var(--cubic-bezier);

    @media (max-width: 715px) {
      font-size: var(--size-step-0);
    }
  }

  @media (min-width: 511px) {
    &:hover {
      svg {
        transform: rotate(720deg) scale(1.2);
        border-color: var(--color-primary);

        path {
          fill: var(--color-primary);
        }
      }

      .brand-logo__type {
        color: var(--color-primary);
      }
    }
  }
}
</style>
