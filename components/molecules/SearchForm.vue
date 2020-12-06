<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" />

    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{
          article.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      articles: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.writing = []
        return
      }

      this.writing = await this.$content('writing')
        .only(['title', 'slug'])
        .sortBy('date', 'desc')
        .limit(12)
        .search(query)
        .fetch()
    },
  },
}
</script>
