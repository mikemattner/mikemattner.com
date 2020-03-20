<template>
  <article :class="['single-link', archive == true ? 'article--link' : '']">
    <nuxt-link :to="`/${formatSlug(article.attributes.title)}`">
      <div class="article-meta">
        <time>{{ formatDate(article.attributes.date) }}</time>
      </div>
      <Header tag="h3" class="article-title">{{
        article.attributes.title
      }}</Header>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    archive: Boolean
  },
  methods: {
    formatDate(date) {
      return new Date(date).toDateString().slice(4)
    },
    formatExcerpt(body) {
      return body.slice(0, 200).trimEnd()
    },
    formatSlug(title) {
      const regex = / /gi
      return title
        .toLowerCase()
        .trim()
        .replace(regex, '-')
    }
  }
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
  //   padding: 1.5rem 0;
  // }
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: none;
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0 0;
    padding: 1.5rem 0.25rem;
    border-bottom: 1px solid rgba($white, 0.05);
  }
  h3 {
    transition: $transition;
    font-size: 1rem;
    margin: 0;
    transition: all 0.25s ease-in-out;
    // display: inline-block;
  }
  &:hover {
    background-color: $darkBlue-1;
    h3 {
      transform: translateX(20px);
      color: $primary;
    }
    .article-meta {
      color: $primary;
    }
  }
  &.article--link {
    // display: flex;
    // align-items: stretch;
    // justify-content: stretch;
    width: 100%;
    a {
      width: 100%;
    }
  }
  .article-title {
    margin: 0;
  }
  .article-description {
    color: $white;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.875rem;
  }
  .article-meta {
    font-size: 0.675rem;
    margin: 0 0.25rem 0 0;
    width: 100px;
    text-transform: uppercase;
    color: $primary;
  }
}
</style>
