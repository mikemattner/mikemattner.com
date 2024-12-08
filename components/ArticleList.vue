<template>
  <section class="article-list__section" :class="{ 'all-articles': listAll }">
    <div v-if="listAll" class="filters-section">
      <PostFilters
        :years="yearsInPosts"
        :year-filter="yearFilter"
        :tags="tagsInPosts"
        :tag-filter="tagFilter"
        :posts="posts"
        :sorted-posts="sortedPosts"
        @update:tag-filter="tagFilter = $event"
        @update:year-filter="yearFilter = $event"
      />
    </div>
    <template v-if="!listAll">
      <ul class="article-list summary-list">
        <li v-for="post in posts" :key="post.title" class="article-list__item">
          <ArticleListItem :post="post" />
        </li>
      </ul>
    </template>
    <div v-else class="article-group">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post, SortedPostItem, SortedPosts } from '../types/posts';
import { convertDate } from '../utils/formatDate';

const props = defineProps({
  posts: { type: Array as PropType<Post[]>, required: true },
  listAll: { type: Boolean, default: false },
});

const yearFilter = ref<Array<string>>([]);
const yearsInPosts = computed<string[]>(() => {
  const years = props.posts.map((item) => convertDate(item.date));
  return [...new Set(years)];
});

const tagFilter = ref<Array<string>>([]);
const tagsInPosts = computed<string[]>(() => {
  const topics = props.posts
    .map((item) => item.tag)
    .flat()
    .sort((a, b) => a.localeCompare(b));
  return [...new Set(topics)];
});

const sortedPosts = computed<SortedPostItem[]>(() => {
  const sortedArray: SortedPosts = {};

  props.posts.forEach((item) => {
    const year = convertDate(item.date);
    if (!sortedArray[year]) {
      sortedArray[year] = { year, posts: [] };
    }
    sortedArray[year].posts.push(item);
  });

  const postList = Object.values(sortedArray).sort().reverse();

  if (yearFilter.value.length) {
    const filteredPosts = postList.filter((item) => yearFilter.value.includes(item.year));

    if (tagFilter.value.length) {
      filteredPosts.forEach((item) => {
        item.posts = item.posts.filter((post) => post.tag.some((tag) => tagFilter.value.includes(tag)));
      });
    }

    return filteredPosts;
  }

  if (tagFilter.value.length) {
    const filteredPosts = postList
      .map((item) => {
        return {
          year: item.year,
          posts: item.posts.filter((post) => post.tag.some((tag) => tagFilter.value.includes(tag))),
        };
      })
      .filter((item) => item.posts.length > 0);

    return filteredPosts;
  }

  return postList;
});
</script>

<style lang="scss" scoped>
.article-list__section {
  position: relative;

  &.all-articles {
    @media (min-width: 980px) {
      display: grid;
      grid-template-columns: repeat(28, 1fr);

      .article-group {
        grid-column: 1 / 23;
      }
      .filters-section {
        grid-column: 24 / -1;
        grid-row: 1;
      }
    }
  }
}
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--sizing-xxl);
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &.summary-list {
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.year-group {
  @media (min-width: 768px) {
    margin: var(--sizing-xxxl) 0 var(--sizing-xxl);

    .article-list {
      margin-top: var(--sizing-xxl);
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
  font-size: var(--size-step-0);
}

.year-header__article-count {
  font-size: var(--size-step--1);
}

.filters-section {
  @media (min-width: 980px) {
    margin: var(--sizing-xxxl) 0 var(--sizing-xxl);
  }
}
</style>
