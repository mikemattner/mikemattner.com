<template>
  <div class="article-list-item">
    <div class="article-list-item__body">
      <header class="article-list-item__header">
        <time>{{ date }}</time>
      </header>
      <div class="article-list-item__title flow">
        <h3 class="small-heading">
          <NuxtLink :to="post._path">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p v-html="post.description"></p>
      </div>
      <div class="article-list-item__tags">
        <ul class="tag-list">
          <li v-for="tag in post.tag" :key="tag">
            <NuxtLink :to="`/blog/tag/${tag}`">{{ tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
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
  border-bottom: 1px solid var(--border-color);
  padding: 0 0 var(--sizing-xxxl) 0;

  p {
    max-width: 70ch;
  }

  &__header {
    font-size: var(--size-step--1);
    font-family: var(--sans-font-family);
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    color: var(--blog-card-date-color);
    padding: 0 0 var(--sizing-lg) 0;
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
  }
  .tag-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    font-size: var(--size-step--1);
    margin-top: var(--sizing-lg);

    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 1px;

      &:after {
        content: ',';
        line-height: 1;
        color: var(--blog-card-date-color);
      }

      &:before {
        content: '#';
        line-height: 1;
        color: var(--blog-card-date-color);
        margin-right: 3px;
      }

      &:last-child:after {
        display: none;
      }
    }
  }
}
</style>
