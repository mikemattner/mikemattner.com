<template>
  <a href="/rss.xml" class="rss-button" title="RSS Feed">
    <Icon name="ri:rss-fill" />
  </a>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.rss-button {
  --size: 2.5rem;
  --icon-fill: var(--font-color);
  --icon-fill-hover: var(--color-primary);

  color: var(--font-color);

  background: transparent;
  border: 0;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: var(--sizing-sm);
  transition: var(--transition-cubic);

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus-visible {
    color: var(--icon-fill-hover);
  }
}
</style>
