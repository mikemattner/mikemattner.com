<template>
  <blockquote class="pull-quote">
    <div class="pull-quote__content">
      <ContentSlot />
      <div v-if="hasSlot('attribution')" class="pull-quote-attribution">
        <slot name="attribution" />
      </div>
    </div>
  </blockquote>
</template>

<script setup lang="ts">
const slots = useSlots();
const hasSlot = (name: string) => {
  return !!slots[name];
};
</script>

<style lang="scss" scoped>
.pull-quote {
  font-size: var(--size-step-1);
  grid-template: 'mark quote' 'mark quote' 1fr / auto 1fr;
  column-gap: var(--sizing-lg);
  line-height: 1.4;
  display: grid;
  color: var(--headline-font-color);
  padding: var(--sizing-xl) var(--sizing-lg);
  position: relative;
  border-top: 2px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);

  @media (min-width: 989px) {
    margin-left: calc(var(--sizing-xl) * -1);
    margin-right: calc(var(--sizing-xl) * -1);
  }

  &__content {
    grid-area: quote;
    font-weight: 600;
  }

  &-attribution {
    font-size: var(--size-step--1);
    font-variation-settings: 'wdth' 100, 'wght' 300, 'ital' 10;
    opacity: 0.75;
    margin-top: var(--sizing-lg);
  }

  &::before {
    content: '“';
    color: var(--color-primary);
    grid-area: mark;
    align-self: start;
    justify-self: start;
    height: 0.5em;
    font-size: 3em;
    line-height: 1;
    transform: translateY(-0.025em);
    font-weight: 800;
  }
}
</style>
