<template>
  <div class="article-list-item">
    <NuxtLink :to="post._path" class="article-list-item__link">
      <header class="article-list-item__header">
        <div class="article-list-item__tags">
          <Icon name="ri:chat-thread-fill" />
          <ul class="tag-list">
            <li v-for="tag in post.tag" :key="tag">{{ tag }}</li>
          </ul>
        </div>
        <time><Icon name="ri:calendar-fill" /> {{ formatDate(post.date) }}</time>
      </header>
      <div class="article-list-item__feature">
        <PrimaryImage :src="featuredImage" has-overlay class="article-list-item__feature-image" />
      </div>
      <div class="article-list-item__title flow">
        <h3 class="small-heading">{{ post.title }}</h3>
        <p class="small-text" v-html="post.description"></p>
      </div>
      <div class="article-list-item__read-more"><span>Read more</span> <Icon name="ri:arrow-right-fill" /></div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Post } from '../types/posts';
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
    border: 2px solid var(--border-color);
    box-shadow: 5px 5px 0 0 var(--border-color);
    border-radius: 7px;
    overflow: hidden;

    h3 {
      transition: var(--transition);
    }

    .article-list-item__title {
      padding: var(--sizing-xxl);
    }
    .article-list-item__read-more {
      font-family: var(--code-font-family);
      font-size: var(--size-step--2);
      text-transform: uppercase;
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
      padding: 0 var(--sizing-xxl) var(--sizing-xxl);

      svg {
        transition: transform 0.125s var(--cubic-bezier);
      }
    }

    &:hover {
      color: var(--font-color);
      box-shadow: 0 0 0 0 var(--border-color);
      background-color: var(--block-quote-bg);

      .article-list-item__read-more {
        svg {
          transform: translateX(var(--sizing-sm)) scale(1.1);
        }
      }

      .article-list-item__feature-image {
        :deep(img) {
          transform: scale(1.2);
        }
      }
    }
  }

  &__feature {
    padding: 0;
  }

  &__feature-image {
    width: 100%;
    display: inline-flex;
    overflow: hidden;

    :deep(img) {
      transition: var(--transition-ease);
    }
  }

  p {
    max-width: 70ch;
  }

  &__header {
    font-size: var(--size-step--2);
    font-family: var(--code-font-family);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-xxl);
    color: var(--blog-card-date-color);
    padding: var(--sizing-lg) var(--sizing-xxl);
    background-color: var(--border-color);
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

    svg {
      width: 1.25rem;
      height: 1.25rem;
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
      gap: var(--sizing-sm);

      &:before {
        content: '/';
        line-height: 1;
        opacity: 0.5;
      }

      &:first-child:before {
        display: none;
      }
    }
  }
}
</style>

<style scoped>
.article-list-item {
  container: article / inline-size;
}
.article-list-item__link {
  @container (width >= 600px) {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

.article-list-item__feature {
  @container (width >= 600px) {
    grid-column: 1;
    grid-row: 2 / span 2;
    display: flex;
    align-items: center;
    padding: var(--sizing-md);
  }
  @container (width <= 599px) {
    padding: var(--sizing-lg) var(--sizing-lg) 0;
  }
}

.article-list-item__feature-image {
  @container (width >= 600px) {
    aspect-ratio: 1;
    height: 100%;
  }
  @container (width <= 599px) {
    aspect-ratio: 2 / 0.75;
  }
}
.article-list-item__header {
  @container (width >= 600px) {
    grid-column: 1 / -1;
    grid-row: 1;
  }
}

.article-list-item__title {
  @container (width >= 600px) {
    grid-column: 2;
    grid-row: 2;
    align-self: start;
  }
}

.article-list-item__read-more {
  @container (width >= 600px) {
    grid-column: 2;
    grid-row: 3;
    align-self: end;
  }
}
</style>
