<template>
  <article :class="['single-article']" :data-type="article.type">
    <nuxt-link
      :to="`/writing/${formatSlug(article.slug)}`"
      data-article-link="true"
    >
      <!-- <div class="article-meta">
        <time>{{ formatDate(article.date) }}</time>
      </div> -->
      <Header tag="h3" class="display-5 article-title">
        <span v-html="article.title"></span>
        <!-- <span class="article-type">
          <fa-icon :icon="categoryIcon" size="sm"></fa-icon>
        </span> -->
      </Header>
      <div v-if="article.description" class="article-description">
        <span v-html="article.description"></span>
      </div>
    </nuxt-link>
    <TagList :tags="article.tag" />
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
.single-article {
  display: block;
  background-image: none;
  position: relative;
  transition: $transition;
  padding-bottom: $defaultPadding;

  a[data-article-link] {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-image: none;
    padding: $defaultPadding 0 math.div($defaultPadding, 2);
    position: relative;
    text-decoration: none;
    // &:after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   top: math.div($defaultPadding, 5) * -1;
    //   bottom: math.div($defaultPadding, 5) * -1;
    //   left: math.div($defaultPadding, 2) * -1;
    //   right: math.div($defaultPadding, 2) * -1;
    //   height: auto;
    //   border-radius: $radius-large;
    //   background-color: $darkShadeBackground;
    //   transition: $transition-cubic;
    //   opacity: 0;
    //   transform: scale(1.2);
    //   pointer-events: none;
    //   filter: blur(1.5rem);
    //   box-shadow: $boxShadowLarge;
    // }
  }
  h3 {
    font-size: $h5;
    display: flex;
    align-items: center;
    line-height: 1.3;
    margin: 0;
    transition: $transition;
    color: $white;
    width: 100%;
    text-decoration: underline;
    text-decoration-color: $primary;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    text-decoration-skip-ink: auto;

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
  .article-description {
    margin-top: 0.125rem;
    font-size: $small;
    font-weight: 400;
    color: $bodyColor;
    z-index: 2;
    @include max-media($tablet) {
      font-size: $base;
      line-height: 1.5;
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

  .tags .button {
    margin: 0;
    font-size: 0.5rem;
  }

  a[data-article-link]:hover {
    // a:after {
    //   opacity: 1;
    //   transform: scale(1);
    //   filter: blur(0);
    //   box-shadow: $boxShadowLarge;
    // }
    h3 {
      text-decoration-color: $primary;
      text-decoration-thickness: 3px;
    }
  }
}
</style>
