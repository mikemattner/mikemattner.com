<template>
  <div class="link-list-item">
    <NuxtLink :to="link._path" class="link-list-item__link">
      <div class="link-list-item__title flow">
        <h3 class="small-heading">{{ link.title }}</h3>
        <p class="small-text" v-html="link.description"></p>
      </div>
      <time>{{ formatDate(link.date) }}</time>
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
  display: flex;
  flex-direction: column;
  gap: var(--sizing-md);

  &__link {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-md);
    text-decoration: none;
    color: inherit;
    padding: var(--sizing-xxl) var(--sizing-lg);
    transition: var(--transition);

    h3 {
      transition: var(--transition);
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    &:hover {
      background-color: var(--background-color-t);
      color: var(--color-primary);

      h3 {
        color: var(--color-primary);
      }
    }
  }

  p {
    max-width: 70ch;
  }

  time {
    font-size: var(--size-step--1);

    @media (min-width: 768px) {
      text-align: right;
    }
  }
}
</style>
