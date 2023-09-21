<template>
  <div class="article-list-item">
    <NuxtLink :to="post._path" class="article-list-item__link">
      <time><Icon name="ri:file-list-2-line" /> {{ formatDate(post.date) }}</time>
      <div class="article-list-item__title flow">
        <h3 class="small-heading">{{ post.title }}</h3>
        <p class="small-text" v-html="post.description"></p>
      </div>
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
