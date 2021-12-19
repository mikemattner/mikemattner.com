<template>
  <article
    :class="['single-link', archive == true ? 'article--link' : '']"
    :data-type="article.type"
  >
    <nuxt-link :to="`/writing/${formatSlug(article.slug)}`">
      <div class="article-meta">
        <time>{{ formatDate(article.date) }}</time>
      </div>
      <Header tag="h3" class="article-title"
        ><span v-html="article.title"></span
        ><fa-icon :icon="categoryIcon" size="sm"></fa-icon
      ></Header>
      <div v-if="article.description" class="article-description">
        <span v-html="article.description"></span>
      </div>
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
.single-link {
  display: block;
  background-image: none;
  position: relative;
  // overflow: hidden;
  transition: $transition;
  a {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-image: none;
    padding: $defaultPadding 0;
    position: relative;
    text-decoration: none;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: math.div($defaultPadding, 5) * -1;
      bottom: math.div($defaultPadding, 5) * -1;
      left: math.div($defaultPadding, 2) * -1;
      right: math.div($defaultPadding, 2) * -1;
      height: auto;
      border-radius: $radius-large;
      background-color: $darkShadeBackground;
      transition: $transition-cubic;
      opacity: 0;
      transform: scale(1.2);
      pointer-events: none;
      filter: blur(1.5rem);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
        0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
        0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
    }
    &:before {
      display: none;
    }
  }
  h3 {
    font-size: $base;
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

    svg {
      margin-left: 1rem;
      width: 1.25rem !important;
      height: 1.25rem;
      padding: math.div($defaultPadding, 5);
      border-radius: 50%;
      background: $middleGray;
      @include max-media($tablet) {
        width: 1.5rem !important;
        height: 1.5rem;
      }
      path {
        fill: shade($middleGray, 90%);
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
    font-size: $small;
    font-weight: 400;
    color: $bodyColor;
    z-index: 2;
    @include max-media($tablet) {
      font-size: $base;
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
    color: $middleGray;
    transition: all 0.25s ease-in-out;
    z-index: 2;
    position: relative;
  }
  &:hover {
    a:after {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    }
  }
}
</style>
