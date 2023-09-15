<template>
  <div class="article-list-item">
    <NuxtLink :to="post._path" class="article-list-item__link">
      <div class="article-list-item__title flow">
        <h3 class="small-heading">{{ post.title }}</h3>
        <p class="small-text" v-html="post.description"></p>
      </div>
      <time>{{ formatDate(post.date) }}</time>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Post } from 'types/posts';
import { formatDate } from '../utils/formatDate';

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});
</script>

<style lang="scss" scoped>
.article-list-item {
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
