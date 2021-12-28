<template>
  <section class="all-articles">
    <template v-if="!listAll">
      <ul class="article-list main-content">
        <li v-for="post in posts" :key="post.title" class="article">
          <ArticleLink :article="post" />
        </li>
      </ul>
    </template>
    <template v-if="listAll">
      <div class="layout">
        <div class="main-content">
          <hr />
          <div class="filters-header">
            <Button
              secondary
              ghost
              small
              :icon="filtersIcon"
              icon-right
              :class="['button--filter', { active: filtersOpen }]"
              @click.native="openFilters()"
            >
              Filters
            </Button>
            <Button
              v-if="filtered || tagsFiltered"
              class="button--clear"
              tertiary
              ghost
              small
              icon="times"
              icon-right
              @click.native="clearFilter()"
            >
              Clear Filters
            </Button>
          </div>
          <div :class="['all-filters', { active: filtersOpen }]">
            <div v-if="allTags.length > 0" class="filter-col">
              <Header tag="h3" class="text-small">Topic</Header>
              <div class="filter-row">
                <Button
                  v-for="(item, index) in sortedTags"
                  :key="index"
                  :icon="isSelected(item)"
                  icon-right
                  :class="[filtersSelected.includes(item) ? 'active' : '']"
                  :data-year="item"
                  secondary
                  ghost
                  small
                  @click.native="filter(item)"
                >
                  {{ item }}
                </Button>
              </div>
            </div>
            <div class="filter-col">
              <Header tag="h3" class="text-small">Year</Header>
              <div class="filter-row">
                <Button
                  v-for="(item, index) in yearsInPosts"
                  :key="index"
                  :icon="isSelected(item)"
                  icon-right
                  :class="[filtersSelected.includes(item) ? 'active' : '']"
                  :data-year="item"
                  secondary
                  ghost
                  small
                  @click.native="filter(item)"
                >
                  {{ item }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in sortedPosts"
        :key="index"
        class="layout year-group"
      >
        <hr
          v-if="index === 0"
          class="margin-to-main year-group-sep first-in-list"
        />
        <template
          v-if="
            !filtered ||
            (filteredBoth &&
              filtersSelected.includes(item.year) &&
              filtersSelected.some((r) => item.tags.includes(r))) ||
            (!filteredBoth &&
              filteredYears &&
              filtersSelected.includes(item.year)) ||
            (!filteredBoth &&
              filteredTags &&
              filtersSelected.some((r) => item.tags.includes(r)))
          "
        >
          <div class="year-designation" :data-tags="item.tags">
            <Header :id="item.year" tag="h3" class="display-5">
              {{ item.year }}
            </Header>
          </div>
          <ul class="article-list main-content">
            <li
              v-for="post in item.posts"
              :key="post.title"
              :data-tags="convertList(post.tag)"
              class="article"
            >
              <ArticleLink
                v-if="
                  !filtered ||
                  (filteredBoth &&
                    filtersSelected.includes(item.year) &&
                    filtersSelected.some((r) => post.tag.includes(r))) ||
                  (!filteredBoth &&
                    filteredTags &&
                    filtersSelected.some((r) => post.tag.includes(r))) ||
                  (!filteredBoth &&
                    filteredYears &&
                    filtersSelected.includes(item.year))
                "
                :article="post"
              />
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
    allTags: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    listAll: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      filtered: false,
      filtersOpen: false,
      sortedPosts: Object,
      yearsInPosts: Array,
      sortedTags: Array,
      filtersSelected: [],
    }
  },
  computed: {
    filteredTags() {
      return this.filtersSelected.some((r) => this.sortedTags.includes(r))
    },
    filteredYears() {
      return this.filtersSelected.some((r) => this.yearsInPosts.includes(r))
    },
    filteredBoth() {
      return this.filteredTags && this.filteredYears
    },
    filtersIcon() {
      return this.filtersOpen ? 'chevron-up' : 'chevron-down'
    },
  },
  mounted() {
    this.getYears()
    this.sortIntoYearArray()
    this.getTags()
  },
  methods: {
    convertDate(date) {
      return new Date(date).getFullYear().toString()
    },
    getTags() {
      this.sortedTags = [...new Set(this.allTags.map((item) => item.title))]
    },
    getYears() {
      this.yearsInPosts = [
        ...new Set(this.posts.map((item) => this.convertDate(item.date))),
      ]
    },
    sortIntoYearArray() {
      const sortedArray = {}

      this.yearsInPosts.forEach((item, index) => {
        sortedArray[item] = { year: item, tags: [], posts: [] }
      })

      this.posts.forEach((item, index) => {
        const year = this.convertDate(item.date)
        const tag = this.convertList(item.tag)
        sortedArray[year].posts.push(item)
        sortedArray[year].tags.push(tag)
      })

      const ordered = Object.keys(sortedArray)
        .sort()
        .reverse()
        .map((key) => {
          return sortedArray[key]
        })

      this.sortedPosts = ordered
    },
    filter(item) {
      if (!this.filtersSelected.includes(item)) {
        this.filtered = true
        this.filtersSelected.push(item)
      } else if (this.filtersSelected.includes(item)) {
        const index = this.filtersSelected.indexOf(item)
        if (index > -1) {
          this.filtersSelected.splice(index, 1)
        }
        if (this.filtersSelected.length < 1) {
          this.filtered = false
        }
      }
    },
    clearFilter() {
      this.filtered = false
      this.filtersSelected = []
    },
    isSelected(item) {
      return this.filtersSelected.includes(item) ? 'times' : ''
    },
    openFilters() {
      this.filtersOpen = !this.filtersOpen
    },
    convertList(items) {
      if (items.length === 1) return items.join()
      return items.join(',')
    },
  },
}
</script>

<style lang="scss" scoped>
.all-articles {
  .all-filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-gap: $base;
    padding-bottom: 0;
    opacity: 0;
    max-height: 0;
    transition: $transition-cubic;

    h3 {
      margin-top: 0;
    }

    hr {
      margin-bottom: $defaultPadding;
    }

    .filter-col {
      margin: math.div($defaultPadding, 2) 0 0;
      padding-top: 0;
    }
    .filter-row {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      opacity: 0;
      transition: $transition-cubic;
      visibility: hidden;
    }
    .button {
      margin: 0;
      margin-right: math.div($defaultPadding, 2);
      margin-top: math.div($defaultPadding, 3);
      margin-bottom: math.div($defaultPadding, 3);
    }

    &.active {
      max-height: 500px;
      opacity: 1;
      padding-bottom: math.div($defaultPadding, 2);

      .filter-row {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .filters-header {
    display: flex;
    align-items: center;
    .button--clear {
      margin: 0 0 0 math.div($defaultPadding, 4);
    }
  }
  .year-designation {
    grid-column: main-content / span 7;
    @media (min-width: 769px) {
      grid-column: margin-start / span 1;

      h3 {
        // position: sticky;
        top: 80px;
      }
    }
  }
  .year-group-sep {
    margin: $defaultPadding 0;

    &.first-in-list {
      margin: 0 0 $defaultPadding 0;
    }
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
