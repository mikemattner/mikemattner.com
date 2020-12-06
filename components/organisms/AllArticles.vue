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
  // @media (min-width: $tablet) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-column-gap: 20px;
  //   grid-row-gap: 10px;
  // }

  li {
    // margin: 0;
    // justify-self: stretch;
    // align-self: stretch;
    // display: flex;
    // align-items: stretch;
    // justify-content: flex-start;

    &:first-child {
      border-top: 1px solid tint($darkBlue, 2%);
    }
  }
}
</style>
