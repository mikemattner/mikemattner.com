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
    transition: var(--transition-cubic-med);

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    &:hover {
      color: inherit;
      background-color: #000;
      transform: scale(1.025);
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
