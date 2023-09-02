<template>
  <section class="article-list__section">
    <template v-if="!listAll">
      <ul class="article-list">
        <li v-for="post in posts" :key="post.title">
          <ArticleListItem :post="post" />
        </li>
      </ul>
    </template>
    <template v-else>
      <div v-for="(item, index) in sortedPosts" :key="index" class="layout year-group">
        <h3 class="year-header bar-right">{{ item.year }}</h3>
        <ul class="article-list">
          <li v-for="post in item.posts" :key="post.title">
            <ArticleListItem :post="post" />
          </li>
        </ul>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { Post, SortedPostItem, SortedPosts } from 'types/posts';

const props = defineProps({
  posts: { type: Array as PropType<Post[]>, required: true },
  listAll: { type: Boolean, default: false },
});

const yearsInPosts = ref<string[]>([]);
const sortedPosts = ref<SortedPostItem[]>();

const convertDate = (date: string) => {
  return new Date(date).getFullYear().toString();
};

const getYears = () => {
  yearsInPosts.value = [...new Set(props.posts.map((item) => convertDate(item.date)))];
};

const sortIntoYearArray = () => {
  const sortedArray: SortedPosts = {};

  yearsInPosts.value.forEach((item, index) => {
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

  sortedPosts.value = ordered;
};

onMounted(() => {
  getYears();
  sortIntoYearArray();
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

  li {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
}

.year-header {
  margin: var(--sizing-xxxl) 0 var(--sizing-lg);

  // @media (min-width: 716px) {
  //   position: sticky;
  //   top: 0;
  //   background-color: var(--color-dark-t);
  //   backdrop-filter: blur(10px);
  // }
}
</style>
