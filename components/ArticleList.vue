<template>
  <section class="article-list__section">
    <template v-if="!listAll">
      <ul class="article-list summary-list">
        <li v-for="post in posts" :key="post.title" class="article-list__item">
          <ArticleListItem :post="post" />
        </li>
      </ul>
    </template>
    <template v-else>
      <div v-for="(item, index) in sortedPosts" :key="index" class="year-group">
        <header class="year-group__header">
          <h3 class="year-header">{{ item.year }}</h3>
          <div class="year-header__article-count">{{ item.posts.length }} Items</div>
        </header>
        <ul class="article-list">
          <li v-for="post in item.posts" :key="post.title" class="article-list__item">
            <ArticleListItem :post="post" />
          </li>
        </ul>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { Post, SortedPostItem, SortedPosts } from '../types/posts';
import { convertDate } from '../utils/formatDate';

const props = defineProps({
  posts: { type: Array as PropType<Post[]>, required: true },
  listAll: { type: Boolean, default: false },
});

const sortedPosts = computed<SortedPostItem[]>(() => {
  const yearsInPosts = [...new Set(props.posts.map((item) => convertDate(item.date)))];

  const sortedArray: SortedPosts = {};

  yearsInPosts.forEach((item, index) => {
    sortedArray[item] = { year: item, posts: [] };
  });

  props.posts.forEach((item, index) => {
    const year = convertDate(item.date);

    sortedArray[year].posts.push(item);
  });

  const ordered = Object.keys(sortedArray)
    .sort()
    .reverse()
    .map((key) => {
      return sortedArray[key];
    });

  return ordered;
});
</script>

<style lang="scss" scoped>
.article-list__section {
  position: relative;
}
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--sizing-xxxl);

  &.summary-list {
    grid-template-columns: repeat(1, 1fr);

    // @media (min-width: 901px) {
    //   grid-template-columns: repeat(2, 1fr);
    //   gap: var(--sizing-xxxl);
    // }

    // @media (max-width: 900px) {
    //   grid-template-columns: repeat(1, 1fr);
    // }
  }
}

.year-group {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(28, 1fr);
    gap: var(--sizing-xxl) 0;
    margin: var(--sizing-xxxl) 0 var(--sizing-xxl);

    .article-list {
      grid-column: 11 / -1;
    }
  }
}

.year-group__header {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: var(--sizing-xl);
  margin: var(--sizing-xxxl) 0 var(--sizing-xxl);

  @media (min-width: 768px) {
    grid-column: 1 / span 6;
    margin: 0;
    flex-direction: column;
    gap: var(--sizing-sm);
  }

  @media (max-width: 767px) {
    margin-top: var(--sizing-xxxl);
  }
}

.year-header {
  line-height: 1;
}

.year-header__article-count {
  font-size: var(--size-step--1);
}
</style>
