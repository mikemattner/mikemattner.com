<template>
  <div class="article-list-item">
    <NuxtLink :to="post._path" class="article-list-item__link">
      <div class="article-list-item__body">
        <header class="article-list-item__header">
          <time>{{ formatDate(post.date) }}</time>
          <div class="article-list-item__tags">
            <ul class="tag-list">
              <li v-for="tag in post.tag" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </header>
        <div class="article-list-item__title flow">
          <h3 class="small-heading">{{ post.title }}</h3>
          <p v-html="post.description"></p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '../types/posts';
import { formatDate } from '../utils/formatDate';

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});

const featuredImage = computed<string>(() => {
  if (!props.post.image) return '/images/feature/default-two.jpg';
  return props.post.image;
});
</script>

<style lang="scss" scoped>
.article-list-item {
  height: 100%;

  &__link {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    background-color: var(--block-quote-bg);
    padding: var(--sizing-xxl);
    font-size: var(--size-step--1);

    h3 {
      transition: var(--transition);
    }

    .article-list-item__title {
      padding: 0;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      bottom: 20px;
      left: 20px;
      right: 20px;
      border-radius: 7px;
      background-color: var(--block-quote-bg);
      transition: all 0.125s var(--cubic-bezier);
      opacity: 0;
      z-index: 1;
      box-shadow: var(--box-shadow-long);
    }

    &:hover {
      color: var(--font-color);
      box-shadow: inset 0 0 0 1px var(--color-primary);
    }
  }

  &__feature {
    padding: 0;
    z-index: 2;
  }

  p {
    max-width: 70ch;
  }

  &__header {
    font-size: var(--size-step--2);
    font-family: var(--code-font-family);
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

    &:after {
      content: '•';
      line-height: 1;
      opacity: 0.5;
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

    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 1px;

      &:after {
        content: ',';
        line-height: 1;
        opacity: 0.5;
      }

      &:last-child:after {
        display: none;
      }
    }
  }
}

.article-list-item {
  container: article / inline-size;
}
.article-list-item__link {
  padding: var(--sizing-lg) var(--sizing-xl);

  @container (width >= 600px) {
    display: grid;
    // grid-template-columns: 1fr 200px;
    grid-template-columns: 200px 1fr;
    gap: var(--sizing-xxl);
    padding: var(--sizing-xxl);
  }
}

.article-list-item__feature {
  @container (width >= 600px) {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
  }
  @container (width <= 599px) {
    padding: 0 0 var(--sizing-md) 0;
  }
}

.article-list-item__body {
  @container (width >= 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1 / -1;
    grid-row: 1;
    padding: 0;
    align-self: start;
  }
}
</style>
