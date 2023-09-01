<template>
  <ul class="article-list">
    <li v-for="post in posts" :key="post.title">
      <ArticleListItem :post="post" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  posts: { type: Array as PropType<Post[]>, required: true },
});
</script>

<style lang="scss" scoped>
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
