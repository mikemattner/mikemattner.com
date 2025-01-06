<template>
  <blockquote class="pull-quote">
    <div class="pull-quote__content">
      <ContentSlot />
      <div v-if="$slots.attribution" class="pull-quote-attribution">
        <slot name="attribution" />
      </div>
    </div>
  </blockquote>
</template>

<style lang="scss" scoped>
.pull-quote {
  font-size: var(--size-step-1);
  grid-template: 'mark quote' 'mark quote' 1fr / auto 1fr;
  column-gap: var(--sizing-lg);
  line-height: 1.4;
  display: grid;
  color: var(--headline-font-color);
  border-radius: var(--border-radius);
  padding: var(--sizing-xl) var(--sizing-lg);
  position: relative;
  text-wrap: pretty;

  @media (min-width: 989px) {
    margin-left: calc(var(--sizing-xl) * -1);
    margin-right: calc(var(--sizing-xl) * -1);
  }

  &__content {
    grid-area: quote;
  }

  &-attribution {
    font-size: var(--size-step--1);
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
    font-family: var(--sans-font-family);
  }
}
</style>
