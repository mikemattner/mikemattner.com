<template>
  <article
    :class="['single-link', archive == true ? 'article--link' : '']"
    :data-type="article.type"
  >
    <nuxt-link :to="`/writing/${formatSlug(article.slug)}`">
      <div class="article-meta">
        <time>{{ formatDate(article.date) }}</time>
      </div>
      <Header tag="h3" class="article-title display-6"
        ><span v-html="article.title"></span
        ><fa-icon v-if="article.type == 'link'" icon="link" size="sm"></fa-icon
        ><fa-icon
          v-if="article.type == 'quote'"
          icon="quote-left"
          size="sm"
        ></fa-icon
        ><fa-icon
          v-if="article.type == 'entry'"
          icon="stream"
          size="sm"
        ></fa-icon
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
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0 0;
    padding: $defaultPadding 0;
    // border-bottom: 1px solid tint($darkBlue, 2%);
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: ($defaultPadding/5) * -1;
      bottom: ($defaultPadding/5) * -1;
      left: ($defaultPadding/2) * -1;
      right: ($defaultPadding/2) * -1;
      border-radius: $radius-large;
      background-color: $darkShadeBackground;
      transition: $transition-cubic;
      opacity: 0;
      transform: scale(1.2);
      pointer-events: none;
      filter: blur(1.5rem);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0);
    }
  }
  h3 {
    // font-size: 1rem;
    display: flex;
    align-items: center;
    line-height: 1.3;
    margin: 0;
    transition: all 0.25s ease-in-out;
    color: $white;
    width: 100%;

    @include max-media($tablet) {
      justify-content: space-between;
    }

    svg {
      margin-left: 1rem;
      width: 1.25rem !important;
      height: 1.25rem;
      padding: $defaultPadding/5;
      border-radius: 50%;
      background: $blueSteel;
      @include max-media($tablet) {
        width: 1.5rem !important;
        height: 1.5rem;
      }
      path {
        fill: shade($blueSteel, 90%);
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
    margin-left: 2rem;
    font-size: $small;
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
    color: $blueSteel;
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
    // h3 {
    //   color: $primary;
    // }
    // .article-meta {
    //   color: $primary;
    // }
  }
}
</style>
