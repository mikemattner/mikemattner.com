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
      <div class="anchor" aria-hidden="true">
        <div class="bounce-arrow"></div>
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
      border-radius: $radius;
      background-color: $darkShadeBackground;
      transition: $transition;
      opacity: 0;
      transform: scale(1.2);
      pointer-events: none;
      filter: blur(1.5rem);
    }
  }
  h3 {
    font-size: 1rem;
    line-height: 1.3;
    margin: 0;
    transition: all 0.25s ease-in-out;
    color: $white;
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
  .anchor {
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(100%) translateX(30%);
    background-image: none;
    transition: all 0.25s ease-in-out;
    opacity: 0;
    padding: 40px;
    border-radius: 50%;
    background-color: $blueSteel;
    z-index: 0;
    .bounce-arrow {
      display: block;
      margin: 0;
      &:before {
        @include arrow-right(rgba($white, 1));
      }
    }
  }
  &:hover {
    // background-color: $darkShadeBackground;
    // a {
    //   padding: $defaultPadding $defaultPadding;
    // }
    a:after {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
    }
    h3 {
      // transform: translateX(20px);
      color: $primary;
    }
    .article-meta {
      // transform: translateX(20px);
      color: $primary;
    }
    // .anchor {
    //   opacity: 1;
    //   padding: 80px;
    //   transform: translateY(-50%) translateX(30%);
    // }
  }
}
</style>
