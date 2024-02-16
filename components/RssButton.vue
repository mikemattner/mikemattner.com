<template>
  <BaseButton href="/rss.xml" class="rss-button" title="RSS Feed" variant="text" size="sm" color="secondary">
    <Icon name="ri:rss-fill" />
  </BaseButton>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.rss-button {
  --size: 2.5rem;
  --icon-fill: var(--headline-font-color);
  --icon-fill-hover: var(--headline-font-color);

  // @media (max-width: 715px) {
  //   --size: 3.5rem;
  // }

  // color: var(--icon-fill);

  // background: transparent;
  // border: 0;
  // padding: 0;
  font-size: var(--size-step-0);
  // border-radius: 7px;
  // background-color: var(--border-color);

  // inline-size: var(--size);
  // block-size: var(--size);
  // aspect-ratio: 1;
  // border-radius: var(--sizing-sm);
  // transition: var(--transition);

  // cursor: pointer;
  // touch-action: manipulation;
  // -webkit-tap-highlight-color: transparent;
  // outline-offset: 5px;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  // &:hover,
  // &:focus-visible {
  //   // @media (min-width: 716px) {
  //   //   transform: scale(1.2);
  //   // }
  //   background-color: var(--color-primary);
  //   color: var(--icon-fill-hover);
  // }
}
</style>
