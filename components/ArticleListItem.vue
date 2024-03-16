<template>
  <div class="article-list-item">
    <NuxtLink :to="post._path" class="article-list-item__link">
      <div class="article-list-item__feature">
        <PrimaryImage :src="featuredImage" has-overlay class="article-list-item__feature-image" />
      </div>
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
        <p class="small-text" v-html="post.description"></p>
      </div>
      <!-- <div class="article-list-item__read-more"><span>Read more</span> <Icon name="ri:arrow-right-fill" /></div> -->
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
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    background-color: var(--block-quote-bg);
    padding: var(--sizing-lg);

    h3 {
      transition: var(--transition);
    }

    .article-list-item__title {
      // padding: 0 0 var(--sizing-xl);
      padding: 0;
      z-index: 2;
    }
    .article-list-item__read-more {
      font-family: var(--code-font-family);
      font-size: var(--size-step--2);
      text-transform: uppercase;
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
      padding: 0;
      z-index: 2;

      svg {
        transition: transform 0.125s var(--cubic-bezier);
      }
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
      // background-color: var(--block-quote-bg);

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
    z-index: 2;
  }

  &__feature-image {
    width: 100%;
    display: inline-flex;
    overflow: hidden;
    border-radius: 7px;
    transition: var(--transition-ease);

    :deep(img) {
      transition: transform 0.25s var(--cubic-bezier);
      // opacity: 0.25;
      overflow: hidden;
    }

    :deep(.primary-image__image.has-overlay) {
      img {
        filter: grayscale(100%) invert(5%) saturate(350%) hue-rotate(351deg) brightness(105%) contrast(95%);
      }

      &::after,
      &::before {
        transition: opacity 0.25s ease-in-out;
      }
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
  @container (width >= 600px) {
    display: grid;
    grid-template-columns: 1fr 200px;
  }
}

.article-list-item__feature {
  @container (width >= 600px) {
    grid-column: 2;
    grid-row: 1 / span 2;
    display: flex;
    align-items: center;
    padding-left: var(--sizing-xl);
  }
  @container (width <= 599px) {
    padding: 0 0 var(--sizing-md) 0;
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
    padding: 0 0 var(--sizing-lg) 0;
  }
}

.article-list-item__title {
  @container (width >= 600px) {
    grid-column: 1;
    grid-row: 2;
    align-self: start;
  }
}

// .article-list-item__read-more {
//   @container (width >= 600px) {
//     grid-column: 2;
//     grid-row: 3;
//     align-self: end;
//   }
// }
</style>
