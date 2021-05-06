<template>
  <section class="section section--single--article">
    <article :key="$route.params.slug">
      <PageHero dark>
        <div class="meta top main-content">
          <fa-icon
            class="article-type"
            :icon="categoryIcon"
            size="sm"
          ></fa-icon>
          <time>{{ formattedDate }}</time>
        </div>
        <Header
          tag="h1"
          class="display-4 main-content"
          v-html="writing.title"
          center
        ></Header>
        <p v-html="writing.description" class="main-content"></p>
        <div class="meta flex main-content">
          <TagList :tags="writing.tag" />
        </div>
      </PageHero>
      <div id="content" :data-type="writing.type" :class="writing.type">
        <nuxt-content :document="writing" />
        <div class="layout" v-if="writing.type == 'quote'">
          <p class="attribution">&mdash; {{ writing.attribution }}</p>
        </div>
        <aside v-if="writing.link" class="layout">
          <div class="article-link main-content">
            <p>Take a gander at the content I&rsquo;m referencing</p>
            <ButtonLink :href="writing.link[0]" target="_blank" small ghost
              ><span v-if="writing.linktitle">{{ writing.linktitle }}</span
              ><span v-else>View Link</span>
              <fa-icon icon="external-link-alt" size="sm"></fa-icon
            ></ButtonLink>
          </div>
        </aside>
        <div class="layout">
          <div class="links main-content">
            <Button
              v-if="prev"
              :to="`/writing/${prev.slug}`"
              class="button prev"
              ><fa-icon icon="chevron-left" size="sm"></fa-icon> Previous
              Article</Button
            >
            <Button v-else to="/writing/" class="button prev"
              ><fa-icon icon="chevron-left" size="sm"></fa-icon> Back to
              Articles
            </Button>
            <Button
              v-if="next"
              :to="`/writing/${next.slug}`"
              class="button next"
              >Next Article <fa-icon icon="chevron-right" size="sm"></fa-icon
            ></Button>
            <Button v-else to="/writing/" class="button next"
              >Back to Articles
              <fa-icon icon="chevron-right" size="sm"></fa-icon>
            </Button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  transition: 'fade',
  scrollToTop: true,
  computed: {
    formattedDate() {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }
      return new Date(this.writing.date).toLocaleDateString('en-us', options)
    },
    categoryIcon() {
      switch (this.writing.type) {
        case 'link':
          return 'link'
        case 'quote':
          return 'quote-left'
        default:
          return 'stream'
      }
    },
  },
  async asyncData({ $content, params }) {
    try {
      const writing = await $content('writing', params.slug).fetch()

      const [prev, next] = await $content('writing')
        .only(['date', 'slug'])
        .sortBy('date', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        writing,
        prev,
        next,
      }
    } catch (err) {
      /* eslint-disable */
      console.debug('No Post:', err)
      /* eslint-enable */
      return false
    }
  },
  head() {
    return {
      titleTemplate: `${this.writing.title} – %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.writing.title,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.writing.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.writing.title,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.writing.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.writing.title,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.section--single--article {
  min-height: 90vh;
  .hero {
    // text-align: center;
    h1 {
      margin-bottom: 0.75rem;
    }
    .article-type {
      display: block;
      // margin-bottom: 1rem;
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
  #content {
    padding-top: 2rem;
  }
  .quote {
    blockquote {
      font-size: $base * 1.25;
      line-height: 1.5;
    }
  }
  .nuxt-content {
    p code {
      background-color: $darkShadeBackground;
    }
  }
  .nuxt-content-highlight {
    position: relative;
    background-color: $darkShadeBackground;
    font-size: 0.75rem;
    padding: $defaultPadding;
    border-radius: $radius-large;
    box-shadow: 0 2px 20px rgba($darkShadeBackground, 0.15);
    padding-top: $defaultPadding * 1.5;
    @media (max-width: 768px) {
      overflow-x: scroll;
    }
    .filename {
      position: absolute;
      right: $defaultPadding/2;
      top: $defaultPadding * 2;
      font-size: 0.75rem;
      padding: $defaultPadding/7;
      background-color: $bodyBackground;
      border-radius: $radius-small;
      display: none;
    }
  }
  pre {
    background-color: transparent;
    code {
      background-color: transparent;
    }
    @media (min-width: 769px) {
      white-space: pre-wrap;
    }
  }
  .language-bash,
  .language-javascript,
  .language-css,
  .language-html,
  .language-json {
    &:before {
      content: 'language';
      position: absolute;
      border-bottom: 1px solid rgba($borderColor-light, 0.25);
      top: 0;
      right: 0;
      left: 0;
      padding: $defaultPadding/5 $defaultPadding;
      text-transform: uppercase;
      font-size: $small;
    }
  }
  .language-bash {
    &:before {
      content: 'bash';
    }
  }
  .language-javascript {
    &:before {
      content: 'javascript';
    }
  }
  .language-css {
    &:before {
      content: 'css';
    }
  }
  .language-html {
    &:before {
      content: 'html';
    }
  }
  .language-json {
    &:before {
      content: 'json';
    }
  }
  .description {
    font-size: $h5;
    line-height: $scale;
    // padding-bottom: 1rem;
    // border-bottom: 1px solid rgba($white, 0.1);
  }
  .margin-content,
  .outdent-content {
    font-size: $small;
    color: $blueSteel;
  }
  @media (min-width: $tablet) {
    .outdent-content {
      padding-left: $defaultPadding/4;
      border-left: 1px solid rgba($borderColor-light, 0.5);
    }
    .margin-content {
      padding-right: $defaultPadding/4;
      border-right: 1px solid rgba($borderColor-light, 0.5);
    }
  }
  .meta {
    font-size: $small;
    margin: 0 0 2rem;
    color: $blueSteel;
    &.top {
      margin: 0 0 $defaultPadding/3;
      display: flex;
      align-items: center;
      time {
        margin-left: $defaultPadding/3;
      }
    }
    &.flex {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .article-link {
    position: relative;
    background-color: $darkShadeBackground;
    font-size: 0.75rem;
    padding: $defaultPadding/3 $defaultPadding;
    border-radius: $radius-large;
    box-shadow: 0 2px 20px rgba($darkShadeBackground, 0.15);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $defaultPadding;
    margin-top: $defaultPadding;
    color: $blueSteel;
    p {
      margin-right: $defaultPadding;
      padding-right: $defaultPadding;
      font-weight: 700;
      // border-right: 1px solid $blueSteel;
    }
    .button {
      margin: 0.5rem 0;
      svg {
        margin-left: 0.5rem;
      }
    }
  }
  .links {
    padding: 1rem 0;
    text-align: center;
    font-size: 0.75rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.25rem;
    @include min-media($tablet) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    a.button {
      @include max-media($tablet) {
        justify-self: stretch;
      }
      @include min-media($tablet) {
        width: 200px;
      }
      &.prev {
        grid-column: 1;
      }
      &.next {
        @include min-media($tablet) {
          justify-self: end;
          grid-column: 3;
        }
      }
    }
  }
  h2 {
    font-size: $h5;
  }
  h3 {
    font-size: $h5;
  }
  .attribution {
    font-size: $small;
    text-transform: uppercase;
    grid-column: main-content / span 6;
    @media (min-width: $tablet) {
      grid-column-start: main-content-start;
      grid-column-end: main-content-end;
    }
  }
}
</style>
