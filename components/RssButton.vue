<template>
  <BaseButton href="/rss.xml" class="rss-button" title="RSS Feed" variant="outline" size="sm" color="secondary">
    <Icon name="ri:rss-fill" />
  </BaseButton>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.rss-button {
  --size: 2.5rem;
  --icon-fill: var(--button-outline-color-text);
  --icon-fill-hover: var(--button-outline-text-hover);

  font-size: var(--size-step-0);
  fill: var(--icon-fill);
  color: var(--icon-fill);

  &:hover:not(:disabled),
  &:focus-visible {
    color: var(--icon-fill-hover);
    fill: var(--icon-fill);
  }
}
</style>
