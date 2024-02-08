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
      <!-- <div class="article-list-item__feature">
        <PrimaryImage :src="featuredImage" has-overlay class="article-list-item__feature-image" />
      </div> -->
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
    // border: 2px solid var(--border-color);
    // box-shadow: 5px 5px 0 0 var(--border-color);
    border-radius: 7px;
    // overflow: hidden;
    position: relative;

    h3 {
      transition: var(--transition);
    }

    .article-list-item__title {
      padding: 0 0 var(--sizing-xl);
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
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 7px;
      background-color: var(--block-quote-bg);
      transition: all 0.125s var(--cubic-bezier);
      opacity: 0;
      z-index: 1;
    }

    &:hover {
      color: var(--font-color);
      // box-shadow: 0 0 0 0 var(--border-color);
      // background-color: var(--block-quote-bg);

      .article-list-item__read-more {
        svg {
          transform: translateX(var(--sizing-sm)) scale(1.1);
        }
      }

      .article-list-item__feature-image {
        :deep(img) {
          transform: scale(1.2);
          opacity: 1;
        }

        :deep(.primary-image__image.has-overlay) {
          img {
            filter: none;
          }
          &::after,
          &::before {
            opacity: 0;
          }
        }
      }

      &::after {
        top: calc(var(--sizing-lg) * -1);
        bottom: calc(var(--sizing-lg) * -1);
        left: calc(var(--sizing-lg) * -1);
        right: calc(var(--sizing-lg) * -1);
        opacity: 1;
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
      opacity: 0.25;
      overflow: hidden;
    }

    :deep(.primary-image__image.has-overlay) {
      // img {
      //   filter: blur(3px) grayscale(100%) invert(5%) saturate(350%) hue-rotate(351deg) brightness(105%) contrast(95%);
      // }

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
    justify-content: space-between;
    gap: var(--sizing-xxl);
    color: var(--blog-card-date-color);
    padding: 0 0 var(--sizing-lg) 0;
    z-index: 2;
    // background-color: var(--border-color);
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

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
    gap: var(--sizing-xs);

    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: var(--sizing-xs);

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
// .article-list-item {
//   container: article / inline-size;
// }
// .article-list-item__link {
//   @container (width >= 600px) {
//     display: grid;
//     grid-template-columns: 200px 1fr;
//   }
// }

// .article-list-item__feature {
//   @container (width >= 600px) {
//     grid-column: 1;
//     grid-row: 1 / span 3;
//     display: flex;
//     align-items: center;
//     padding-right: var(--sizing-xl);
//   }
//   @container (width <= 599px) {
//     /* padding: var(--sizing-lg) var(--sizing-lg) 0; */
//   }
// }

// .article-list-item__feature-image {
//   @container (width >= 600px) {
//     aspect-ratio: 1;
//     height: 100%;
//   }
//   @container (width <= 599px) {
//     aspect-ratio: 2 / 0.75;
//   }
// }
// .article-list-item__header {
//   @container (width >= 600px) {
//     grid-column: 2 / -1;
//     grid-row: 1;
//     padding: var(--sizing-lg) 0;
//   }
// }

// .article-list-item__title {
//   @container (width >= 600px) {
//     grid-column: 2;
//     grid-row: 2;
//     align-self: start;
//   }
// }

// .article-list-item__read-more {
//   @container (width >= 600px) {
//     grid-column: 2;
//     grid-row: 3;
//     align-self: end;
//   }
// }
</style>
