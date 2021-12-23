<template>
  <section class="all-articles">
    <div v-if="!listAll">
      <ul class="article-list main-content">
        <li v-for="post in posts" :key="post.title" class="article">
          <ArticleLink :article="post" />
        </li>
      </ul>
    </div>
    <template v-if="listAll">
      <div
        v-for="(item, index) in sortedPosts"
        :key="index"
        class="layout year-group"
      >
        <hr v-if="index === 0" class="margin-to-main year-group-sep" />

        <div class="year-designation">
          <Header :id="item.year" tag="h3" class="display-5">
            {{ item.year }}
          </Header>
        </div>
        <ul class="article-list main-content">
          <li v-for="post in item.posts" :key="post.title" class="article">
            <ArticleLink :article="post" />
          </li>
        </ul>
        <hr class="margin-to-main year-group-sep" />
      </div>
    </template>
  </section>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    listAll: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      yearPosts: Array,
      sortedPosts: Object,
    }
  },
  mounted() {
    this.getYears()
    this.sortIntoYearArray()
  },
  methods: {
    convertDate(date) {
      return new Date(date).getFullYear().toString()
    },
    getYears() {
      this.yearPosts = [
        ...new Set(this.posts.map((item) => this.convertDate(item.date))),
      ]
    },
    sortIntoYearArray() {
      const sortedArray = {}

      this.yearPosts.forEach((item, index) => {
        sortedArray[item] = { year: item, posts: [] }
      })

      const ordered = Object.keys(sortedArray)
        .sort()
        .reverse()
        .map((key) => {
          return sortedArray[key]
        })

      this.posts.forEach((item, index) => {
        const year = this.convertDate(item.date)
        sortedArray[year].posts.push(item)
      })

      this.sortedPosts = ordered
    },
  },
}
</script>

<style lang="scss" scoped>
.all-articles {
  .year-designation {
    grid-column: main-content / span 7;
    @media (min-width: 769px) {
      grid-column: margin-start / span 1;

      h3 {
        position: sticky;
        top: 80px;
      }
    }
  }
  .year-group-sep {
    margin: $defaultPadding 0;
  }
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      &:before {
        display: none;
      }
    }
  }
}
</style>
