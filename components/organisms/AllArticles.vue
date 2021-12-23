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
      <div class="layout">
        <div class="filters-header">
          <Button
            v-if="filtered"
            tertiary
            ghost
            small
            icon="times"
            icon-right
            @click.native="clearFilter()"
          >
            Clear
          </Button>
        </div>
        <div class="year-filters main-content">
          <Button
            v-for="(item, index) in yearPosts"
            :key="index"
            :class="[yearSelected.includes(item) ? 'active' : '']"
            :data-year="item"
            primary
            ghost
            small
            @click.native="filter(item)"
            >{{ item }}</Button
          >
        </div>
      </div>
      <div
        v-for="(item, index) in sortedPosts"
        :key="index"
        class="layout year-group"
        :data-year="item.year"
      >
        <hr v-if="index === 0" class="margin-to-main year-group-sep" />
        <template v-if="!filtered || yearSelected.includes(item.year)">
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
        </template>
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
      filtered: false,
      yearSelected: [],
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
    filter(year) {
      if (!this.yearSelected.includes(year)) {
        this.filtered = true
        this.yearSelected.push(year)
      } else if (this.yearSelected.includes(year)) {
        this.filtered = false
        const index = this.yearSelected.indexOf(year)
        if (index > -1) {
          this.yearSelected.splice(index, 1)
        }
      }
    },
    clearFilter() {
      this.filtered = false
      this.yearSelected = []
    },
  },
}
</script>

<style lang="scss" scoped>
.all-articles {
  .year-filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .button {
      margin: 0;
      margin-right: math.div($defaultPadding, 2);
      @media (max-width: 768px) {
        margin-top: math.div($defaultPadding, 2);
      }
    }
  }
  .filters-header {
    grid-column: main-content / span 7;
    @media (min-width: 769px) {
      grid-column: margin-start / span 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .button {
      margin: 0;
    }
  }
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
