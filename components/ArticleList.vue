<template>
  <section>
    <ul class="article-list">
      <li
        v-for="post in sortedPosts.slice(0, 6)"
        :key="post.attributes.title"
        class="article"
      >
        <ArticleLink :article="post" archive />
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedPosts() {
      const sortedPosts = this.posts
      sortedPosts.sort((a, b) => {
        const dateA = new Date(a.attributes.date)
        const dateB = new Date(b.attributes.date)
        if (dateA < dateB) {
          return 1
        }
        if (dateA > dateB) {
          return -1
        }
        return 0
      })
      return sortedPosts
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: $tablet) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }

  li {
    margin: 0;
    justify-self: stretch;
    align-self: stretch;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;

    @media (max-width: $tablet) {
      border-bottom: 1px solid $darkBlue-6;

      &:first-child {
        border-top: 1px solid $darkBlue-6;
      }
    }
  }
}
</style>
