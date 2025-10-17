<template>
  <div class="article-list-item">
    <div class="article-list-item__body">
      <div class="article-list-item__title flow">
        <h3 class="small-heading">
          <NuxtLink :to="post._path">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p v-html="post.description"></p>
      </div>
    </div>
    <footer class="article-list-item__footer">
      <div class="article-list-item__tags">
        <BaseButton
          v-for="tag in post.tag"
          :key="tag"
          :to="`/blog/tag/${tag}`"
          size="xs"
          color="secondary"
          variant="solid"
        >
          {{ tag }}
        </BaseButton>
      </div>
      &bull;
      <time>{{ date }}</time>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '../types/posts';
import { formatDate } from '../utils/formatDate';

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});

const date = computed<string>(() => formatDate(props.post.date));
</script>

<style lang="scss" scoped>
.article-list-item {
  height: 100%;
  padding: var(--sizing-lg);
  background-color: var(--block-quote-bg);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;

  p {
    max-width: 70ch;
  }

  &__body {
    font-size: var(--size-step--1);
    padding: var(--sizing-md) 0 0 0;
  }

  &__footer {
    font-size: var(--size-step--2);
    font-family: var(--sans-font-family);
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    color: var(--blog-card-date-color);
    padding: 0;
    margin-top: var(--sizing-lg);
    z-index: 2;
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }

    .button {
      font-size: var(--size-step--2);
      font-family: var(--code-font-family);
    }
  }
}
</style>
