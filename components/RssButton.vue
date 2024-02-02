<template>
  <a href="/rss.xml" class="rss-button" title="RSS Feed">
    <Icon name="ri:rss-fill" />
  </a>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.rss-button {
  --size: 2.5rem;
  --icon-fill: var(--color-light);
  --icon-fill-hover: var(--color-light);

  @media (max-width: 715px) {
    --size: 3.5rem;
  }

  color: var(--icon-fill);

  background: transparent;
  border: 0;
  padding: 0;
  font-size: var(--size-step-0);

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
    @media (min-width: 716px) {
      transform: scale(1.2);
    }

    color: var(--icon-fill-hover);
  }
}
</style>
