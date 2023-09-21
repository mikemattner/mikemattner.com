<template>
  <div class="link-list-item">
    <NuxtLink :to="link._path" class="link-list-item__link">
      <time><Icon name="ri:external-link-line" /> {{ formatDate(link.date) }}</time>
      <div class="link-list-item__title flow">
        <h3 class="small-heading">{{ link.title }}</h3>
        <p class="small-text" v-html="link.description"></p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Link } from 'types/links';
import { formatDate } from '../utils/formatDate';

const props = defineProps({
  link: { type: Object as PropType<Link>, required: true },
});
</script>

<style lang="scss" scoped>
.link-list-item {
  height: 100%;

  &__link {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--sizing-md);
    text-decoration: none;
    color: inherit;
    padding: var(--sizing-xxl) var(--sizing-lg);
    transition: var(--transition);
    background-color: var(--block-quote-bg);
    border-radius: var(--sizing-sm);

    h3 {
      transition: var(--transition);
    }

    &:hover {
      background-color: var(--background-color-t);
      color: var(--font-color);

      h3 {
        color: var(--color-primary);
      }
    }
  }

  p {
    max-width: 70ch;
  }

  time {
    font-size: var(--size-step--2);
    text-transform: uppercase;
    margin-bottom: var(--sizing-lg);
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
  }
}
</style>
