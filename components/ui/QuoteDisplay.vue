<template>
  <article
    :class="['quote-link', archive == true ? 'article--link' : '']"
    :data-type="article.type"
  >
    <div class="article-meta">
      <time>{{ formatDate(article.date) }}</time>
    </div>
    <Header tag="h3" class="display-5 article-title">
      <NuxtLink :to="`/writing/${formatSlug(article.slug)}`">
        <span v-html="article.title"></span>
      </NuxtLink>
      <span class="article-type">
        <fa-icon :icon="categoryIcon" size="sm"></fa-icon>
      </span>
    </Header>
    <div v-if="article.description" class="article-description">
      <nuxt-content :document="article" />
      <p class="attribution">&mdash; {{ article.attribution }}</p>
    </div>
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
  computed: {
    categoryIcon() {
      switch (this.article.type) {
        case 'link':
          return 'link'
        case 'quote':
          return 'quote-left'
        default:
          return 'stream'
      }
    },
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
.quote-link {
  display: block;
  background-image: none;
  position: relative;
  transition: $transition;
  padding: $defaultPadding 0;

  h3 {
    font-size: $h5;
    display: flex;
    align-items: center;
    line-height: 1.3;
    margin: 0;
    transition: all 0.25s ease-in-out;
    color: $white;
    width: 100%;

    @include max-media($tablet) {
      justify-content: space-between;
      font-size: $base * 1.2;
    }

    .article-type {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem !important;
      height: 1.25rem;
      padding: 0;
      margin-left: math.div($defaultPadding, 3);
      border-radius: 50%;
      background: $middleGray;
      font-size: $small;
      flex-shrink: 0;
      @include max-media($tablet) {
        width: 1.5rem !important;
        height: 1.5rem;
      }
      path {
        fill: $darkBlue;
      }
    }
  }
  &.article--link {
    width: 100%;
    a {
      width: 100%;
    }
  }
  .article-description {
    margin-top: 0.5rem;
    font-weight: 400;
    color: $bodyColor;
    z-index: 2;
    @include max-media($tablet) {
      font-size: $base;
    }

    .attribution {
      font-size: $small;
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
  .article-title {
    margin: 0;
    z-index: 2;
    position: relative;
  }
  .article-meta {
    font-size: $small;
    margin: 0 0 0.5rem 0;
    line-height: 1;
    font-weight: 400;
    color: $primary;
    transition: all 0.25s ease-in-out;
    z-index: 2;
    position: relative;
  }
}
</style>
