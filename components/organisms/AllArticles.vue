<template>
  <section class="main-content">
    <ul class="article-list">
      <li v-for="post in posts" :key="post.title" class="article">
        <ArticleLink :article="post" />
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
