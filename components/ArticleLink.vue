<template>
  <article :class="['single-link', archive == true ? 'article--link' : '']">
    <div class="article-meta">
      <!-- <span class="tag">{{ article.attributes.topic }}</span>
      <span class="bull">&bull;</span> -->
      <time>{{ formatDate(article.attributes.date) }}</time>
    </div>
    <nuxt-link :to="`/${formatSlug(article.attributes.title)}`">
      <Header tag="h3" class="article-title">{{
        article.attributes.title
      }}</Header>
    </nuxt-link>
    <p class="article-description">
      {{ article.attributes.description }}
    </p>
    <!-- <div class="icon">
        <fa-icon icon="chevron-right" size="lg"></fa-icon>
      </div> -->
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
  padding: 1.5rem 0;
  background-image: none;
  position: relative;
  overflow: hidden;
  @media (min-width: $tablet) {
    padding: 1.5rem 0;
  }
  svg {
    opacity: 0.25;
    transition: $transition;
    fill: $white;
    color: $white;
    transform: translateX(2px);
  }
  h3 {
    transition: $transition;
    background-image: linear-gradient($orange, $orange);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    display: inline-block;
  }
  // &:hover {
  //   h3 {
  //     color: $white;
  //     background-size: 100% 6px;
  //   }
  //   p {
  //     color: $white;
  //   }
  // }
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
    margin: 0 0 0.25rem;
  }
  .article-description {
    color: $white;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.875rem;
  }
  .article-meta {
    font-size: 0.675rem;
    margin: 0 0 0.25rem;
    color: rgba($white, 0.35);
    .bull {
      margin: 0 0.25rem;
    }
    .tag {
      font-size: 0.575rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
}
</style>
