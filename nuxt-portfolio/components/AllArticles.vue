<template>
  <section>
    <ul class="article-list">
      <li
        v-for="post in sortedPosts.slice(0, 3)"
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
