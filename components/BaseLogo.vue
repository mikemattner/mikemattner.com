<template>
  <div class="brand-logo">
    <PrimaryLogo />
    <div v-if="showLabel" class="brand-logo__type">Mike Mattner</div>
  </div>
</template>

<script setup lang="ts">
// import PrimaryLogo from '~/assets/images/logo.svg';
import PrimaryLogo from '~/assets/images/MM_Logo.svg';

defineProps({
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
  gap: var(--sizing-sm);
  z-index: 1000;

  svg {
    // width: 2rem;
    // height: 2rem;
    width: 2rem;
    height: 2rem;
    padding: 0;
    // border-radius: 50%;
    // background-color: var(--color-light);
    z-index: 10;
    transition: var(--transition-cubic-slow);
    // flex: 0 0 2rem;
    flex: 0 0 2rem;

    @media (max-width: 510px) {
      height: 2rem;
      width: 2rem;
      flex: 0 0 2rem;
    }

    path {
      // fill: var(--color-dark);
      // fill: var(--color-light);
      fill: var(--headline-font-color);
      transition: var(--transition-cubic-slow);
    }
  }

  &__type {
    font-size: var(--size-step-1);
    line-height: 1;
    letter-spacing: 0.025em;
    // color: var(--color-light);
    color: var(--headline-font-color);
    font-variation-settings: 'wdth' 100, 'wght' 800;
    transition: var(--transition-cubic-slow);

    @media (max-width: 715px) {
      font-size: var(--size-step-1);
    }
  }

  @media (min-width: 511px) {
    &:hover {
      // color: var(--color-light);
      color: var(--headline-font-color);

      // svg {
      //   transform: rotate(720deg);
      //   // transform: scale(1.1);
      // }

      // .brand-logo__type {
      //   font-variation-settings: 'wdth' 100, 'wght' 300;
      // }
    }
  }
}
</style>
