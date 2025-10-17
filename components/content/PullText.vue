<template>
  <div class="pull-text" :class="classes">
    <ContentSlot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  direction: {
    type: String as PropType<'left' | 'right'>,
    default: 'right',
  },
  size: {
    type: String as PropType<'long' | 'short'>,
    default: 'short',
  },
});

const classes = computed(() => {
  return [`pull-text--${props.direction}`, `pull-text--${props.size}`];
});
</script>

<style lang="scss" scoped>
.pull-text {
  font-size: var(--size-step--1);
  font-variation-settings: 'wdth' 100, 'wght' 300, 'ital' 10;
  color: var(--pull-text-color);

  p {
    opacity: 0.75;
  }

  @media (max-width: 1000px) {
    margin: var(--sizing-xl) 0;
    padding: var(--sizing-md) 0;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }

  @media (min-width: 1001px) {
    margin: 0;
    margin-top: 1.75em;
    text-wrap: balance;
    grid-row: span 2;

    &--left {
      text-align: right;
      grid-column: 1 / span 4;
      position: absolute;
      left: 0;
    }

    &--right {
      grid-column: 25 / span 4;
      position: absolute;
      right: 0;
    }

    &--short {
      &::before {
        content: '';
        border-top: 2px solid var(--color-primary);
        display: block;
        margin-bottom: var(--sizing-lg);
      }

      &.pull-text--left {
        &::before {
          width: 25%;
          margin-left: 75%;
        }
      }

      &.pull-text--right {
        &::before {
          width: 25%;
          margin-right: 75%;
        }
      }
    }

    &--long {
      padding: var(--sizing-lg) 0;

      &::before {
        display: none;
      }

      &.pull-text--left {
        border-right: 2px solid var(--color-primary);
        padding-right: var(--sizing-lg);
      }

      &.pull-text--right {
        border-left: 2px solid var(--color-primary);
        padding-left: var(--sizing-lg);
      }
    }
  }
}
</style>
