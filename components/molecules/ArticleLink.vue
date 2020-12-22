<template>
  <article :class="['single-link', archive == true ? 'article--link' : '']">
    <nuxt-link :to="`/writing/${formatSlug(article.slug)}`">
      <div class="article-meta">
        <time>{{ formatDate(article.date) }}</time>
      </div>
      <Header
        tag="h3"
        class="article-title display-6"
        v-html="article.title"
      ></Header>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    archive: Boolean,
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }
      return new Date(date).toLocaleDateString('en-us', options)
    },
    formatExcerpt(body) {
      return body.slice(0, 200).trimEnd()
    },
    formatSlug(title) {
      const regex = / /gi
      return title.toLowerCase().trim().replace(regex, '-')
    },
  },
}
</script>

<style lang="scss">
.single-link {
  display: block;
  // padding: 2rem 3rem 2rem 0;
  background-image: none;
  position: relative;
  overflow: hidden;
  // @media (min-width: $tablet) {
  //   padding: $defaultPadding 0;
  // }
  a {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    background-image: none;
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0 0;
    padding: $defaultPadding $defaultPadding/5;
    border-bottom: 1px solid tint($darkBlue, 2%);
  }
  h3 {
    transition: $transition;
    font-size: 1rem;
    line-height: 1.3;
    margin: 0;
    transition: all 0.25s ease-in-out;
    color: $white;
  }
  &:hover {
    background-color: $darkShadeBackground;
    h3 {
      // transform: translateX(20px);
      // color: $primary;
      // font-style: italic;
    }
    .article-meta {
      // color: $primary;
    }
  }
  &.article--link {
    width: 100%;
    a {
      width: 100%;
    }
  }
  .article-description {
    margin-left: 2rem;
    font-size: $small;
  }
  .article-title {
    margin: 0;
  }
  .article-meta {
    font-size: $small;
    margin: 0 0 0.5rem 0;
    line-height: 1;
    font-weight: 400;
    // flex: 0 0 100px;
    // text-transform: uppercase;
    color: $blueSteel;
    transition: $transition;
    time {
      transition: $transition;
    }
  }
}
</style>
