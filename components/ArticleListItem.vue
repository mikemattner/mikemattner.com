<template>
  <div class="article-list-item">
    <time>{{ formatDate(post.date) }}</time>
    <NuxtLink :to="post._path" class="title">{{ post.title }}</NuxtLink>
    <p class="small-text" v-html="post.description"></p>
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
  padding: var(--sizing-xxl) 0;

  .title {
    font-weight: 700;
  }

  p {
    max-width: 70ch;
  }

  time {
    font-size: var(--size-step--2);
    text-transform: uppercase;
  }
}
</style>
