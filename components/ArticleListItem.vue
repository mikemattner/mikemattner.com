<template>
  <div class="article-list-item">
    <NuxtLink :to="post._path" class="article-list-item__link">
      <time><Icon :name="icon" /> {{ formatDate(post.date) }}</time>
      <div class="article-list-item__title flow">
        <h3 class="small-heading">{{ post.title }}</h3>
        <p class="small-text" v-html="post.description"></p>
      </div>
      <div class="article-list-item__read-more"><span>Read more</span> <Icon name="ri:arrow-right-line" /></div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Post } from 'types/posts';
import { formatDate } from '../utils/formatDate';

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});

const icon = computed<string>(() => {
  if (props.post.type === 'link') return 'ri:external-link-line';
  return 'ri:file-list-2-line';
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
    padding: var(--sizing-lg);
    transition: var(--transition);
    background-color: var(--block-quote-bg);
    border-radius: var(--sizing-lg) var(--sizing-xs) var(--sizing-lg) var(--sizing-xs);
    box-shadow: var(--box-shadow-short);
    // box-shadow: 0 0 0 hsla(var(--color-black-hsl), 0);

    h3 {
      transition: var(--transition);
    }

    .article-list-item__read-more {
      font-size: var(--size-step--1);
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
      color: var(--color-primary);

      svg {
        transition: var(--transition-cubic);
      }
    }

    &:hover {
      color: var(--font-color);
      transform: scale(1.05);
      box-shadow: var(--box-shadow-long);

      .article-list-item__read-more {
        svg {
          transform: translateX(var(--sizing-sm)) scale(1.1);
        }
      }
    }
  }

  p {
    max-width: 70ch;
  }

  time {
    font-size: var(--size-step--2);
    font-family: var(--code-font-family);
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    color: var(--color-highlight);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>
