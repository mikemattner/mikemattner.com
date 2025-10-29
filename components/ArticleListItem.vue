<template>
  <div class="article-list-item">
    <div class="article-list-item__feature-image">
      <NuxtLink class="article-list-item__image-link" :to="post._path">
        <PrimaryImage
          :src="image"
          :alt="`Feature image for ${post.title}`"
          has-overlay
          class="article-list-item__image"
        >
          <template v-if="post.caption" v-slot:caption>{{ post.caption }}</template>
        </PrimaryImage>
      </NuxtLink>
    </div>
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
        <Icon name="typcn:tags" />
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
      <div class="article-list-item__date">
        <Icon name="typcn:calendar-outline" />
        <time>{{ date }}</time>
      </div>
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

const image = computed<string>(() => {
  return props.post.image ? props.post.image : '/images/feature/default-one.jpg';
});
</script>

<style lang="scss" scoped>
.article-list-item {
  height: 100%;
  padding: var(--sizing-lg);
  background-color: var(--block-quote-bg);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: var(--sizing-xl);

  p {
    max-width: 70ch;
  }

  &__body {
    font-size: var(--size-step--1);
    padding: 0;
  }

  &__footer {
    font-size: var(--size-step--2);
    font-family: var(--sans-font-family);
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    color: var(--blog-card-date-color);
    padding: 0;
    z-index: 2;
  }

  &__date {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    font-weight: 400;

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

  &__feature-image {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  &__image-link {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition-fast);

    :deep(img) {
      opacity: 0.375;
      transition: var(--transition-med);
    }
  }

  &:hover {
    .article-list-item__image {
      :deep(img) {
        opacity: 1;
      }
    }
  }
}
</style>
