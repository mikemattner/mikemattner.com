<template>
  <div
    :class="[
      'search-form',
      active == true ? 'active' : '',
      small == true ? 'small' : '',
    ]"
  >
    <fa-icon
      v-if="active"
      class="input-icon"
      icon="times"
      size="sm"
      title="Clear Search"
      @click="clearSearch()"
    ></fa-icon>
    <fa-icon v-else class="input-icon" icon="search" size="sm"></fa-icon>
    <input
      v-model="query"
      type="search"
      placeholder="Search writing"
      autocomplete="off"
    />

    <ul v-if="writing.length">
      <li v-for="article of writing" :key="article.slug">
        <nuxt-link :to="`/writing/${formatSlug(article.slug)}`"
          ><span v-html="article.title"></span
          ><fa-icon
            v-if="article.type == 'link'"
            class="article-type"
            icon="link"
            size="sm"
          ></fa-icon
          ><fa-icon
            v-if="article.type == 'quote'"
            class="article-type"
            icon="quote-left"
            size="sm"
          ></fa-icon
          ><fa-icon
            v-if="article.type == 'entry'"
            class="article-type"
            icon="stream"
            size="sm"
          ></fa-icon
        ></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean,
  },
  data() {
    return {
      query: '',
      writing: [],
      active: false,
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.writing = []
        this.active = false
        return
      }
      this.active = true
      this.writing = await this.$content('writing')
        .sortBy('date', 'desc')
        .limit(12)
        .search(query)
        .fetch()
    },
  },
  methods: {
    formatSlug(title) {
      const regex = / /gi
      return title.toLowerCase().trim().replace(regex, '-')
    },
    clearSearch() {
      this.query = ''
      this.writing = []
      this.active = false
    },
  },
}
</script>

<style lang="scss" scoped>
.search-form {
  position: relative;

  .input-icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 103;
    width: 40px;
    height: 40px;
    padding: 10px;
    &.fa-search {
      pointer-events: none;
      path {
        fill: $primary;
      }
    }
    &.fa-times {
      cursor: pointer;
      // transform: rotate(45deg) translateY(-50%);
      transform-origin: center center;
      path {
        transition: $transition;
        fill: $primary;
      }
      &:hover {
        path {
          fill: $white;
        }
      }
    }
  }

  input {
    background: $darkShadeBackground;
    border: 1px solid $darkShadeBackground;
    border-radius: $radius-large;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.33);
    padding: math.div($defaultPadding, 2) math.div($defaultPadding, 2);
    width: 100%;
    color: $middleGray;
    position: relative;
    transition: $transition;
    z-index: 100;
    -webkit-appearance: none;
    &:focus {
      border-color: $primary;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.33);
      outline: none;
    }
    &:hover {
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.33);
    }
    &::placeholder {
      color: shade($middleGray, 30%);
      opacity: 1;
    }
  }
  ul {
    background: $darkShadeBackground;
    position: absolute;
    top: calc(100% + 1rem);
    left: math.div(-$defaultPadding, 2);
    right: math.div(-$defaultPadding, 2);
    border-color: $middleGray;
    color: $middleGray;
    margin: 0;
    padding: math.div($defaultPadding, 3) 0;
    border-radius: $radius-large;
    z-index: 101;
    list-style: none;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.33);
    overflow: hidden;
    li {
      margin: 0;
      padding: 0 math.div($defaultPadding, 3);

      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-image: none;
        padding: math.div($defaultPadding, 3) math.div($defaultPadding, 2);
        border-radius: $radius-large;
        text-decoration: none;

        .article-type {
          margin-left: 1rem;
          width: 1.25rem !important;
          height: 1.25rem;
          padding: math.div($defaultPadding, 5);
          border-radius: 50%;
          background: $primary;
          color: $darkBlue;
          @include max-media($tablet) {
            width: 1.5rem !important;
            height: 1.5rem;
          }
          path {
            fill: shade($middleGray, 90%);
          }
        }
        &:before,
        &:after {
          display: none;
        }
        &:hover {
          background-color: $primary;
          color: $darkBlue;

          .article-type {
            background: $white;
            path {
              fill: $darkBlue;
            }
          }
        }
      }
    }
  }
  &.active {
    input {
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.33);
    }
  }
  &.small {
    font-size: $base * 0.75;
    input {
      padding: math.div($defaultPadding, 3);
    }
  }
}
</style>
