<template>
  <section class="section section--single--article">
    <article :key="$route.params.slug">
      <PageHero :image="writing.image" :image-alt="writing.imageAlt" dark>
        <div class="meta top main-content">
          <NuxtLink :to="`/writing/type/${writing.type}`">
            <span class="article-type"
              ><fa-icon :icon="categoryIcon" size="sm"></fa-icon>
            </span>
          </NuxtLink>
          <time>{{ formattedDate }}</time>
        </div>
        <Header
          tag="h1"
          class="display-1 main-content"
          v-html="writing.title"
        ></Header>
        <div class="meta flex main-content">
          <TagList :tags="writing.tag" />
        </div>
      </PageHero>
      <div id="content" :data-type="writing.type" :class="writing.type">
        <nuxt-content :document="writing" />
        <div v-if="writing.type == 'quote'" class="layout">
          <p class="attribution">&mdash; {{ writing.attribution }}</p>
        </div>
        <aside v-if="writing.link" class="layout">
          <div class="article-link main-content">
            <div class="copy">
              <Header tag="h6" class="display-6">Want to know more?</Header>
              <p>View the content I&rsquo;m referencing</p>
            </div>
            <Button
              :href="writing.link[0]"
              target="_blank"
              icon="external-link-alt"
              icon-right
              small
              secondary-dark
              ><span v-if="writing.linktitle">{{ writing.linktitle }}</span
              ><span v-else>View Link</span>
            </Button>
          </div>
        </aside>
        <div class="layout">
          <div class="links main-content">
            <Button
              v-if="prev"
              :to="`/writing/${prev.slug}`"
              class="button prev"
              icon="chevron-left"
              icon-left
              primary
              ghost
              >Previous Article</Button
            >
            <Button
              v-else
              to="/writing/"
              class="button prev"
              icon="chevron-left"
              icon-left
              primary
              ghost
              >Back to Articles
            </Button>
            <Button
              v-if="next"
              :to="`/writing/${next.slug}`"
              class="button next"
              icon="chevron-right"
              icon-right
              primary
              ghost
              >Next Article
            </Button>
            <Button
              v-else
              to="/writing/"
              class="button next"
              icon="chevron-right"
              icon-right
              primary
              ghost
              >Back to Articles
            </Button>
          </div>
        </div>
      </div>
      <WaveRight flip />
    </article>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, params, error }) {
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
    } catch (e) {
      return error({ statusCode: 404, message: 'Article not found' })
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
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem !important;
      height: 1.25rem;
      padding: 0;
      border-radius: 50%;
      background: $middleGray;
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
  #content {
    padding-top: 0rem;
    background-color: $darkShadeBackground;
  }
  .quote {
    blockquote {
      font-size: $base * 1.25;
      line-height: 1.5;
    }
  }
  .nuxt-content {
    code {
      background-color: $darkerShadeBackground;
    }
  }
  .nuxt-content-highlight {
    position: relative;
    background-color: $darkerShadeBackground;
    font-size: 0.75rem;
    padding: $defaultPadding;
    border-radius: $radius-large;
    box-shadow: $boxShadow;
    padding-top: $defaultPadding * 1.5;
    @media (max-width: 768px) {
      overflow-x: scroll;
    }
    .filename {
      position: absolute;
      right: math.div($defaultPadding, 2);
      top: $defaultPadding * 2;
      font-size: 0.75rem;
      padding: math.div($defaultPadding, 7);
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
      padding: math.div($defaultPadding, 5) $defaultPadding;
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
    color: $middleGray;
  }
  @media (min-width: $tablet) {
    .outdent-content {
      padding-left: math.div($defaultPadding, 4);
      border-left: 1px solid rgba($borderColor-light, 0.5);
    }
    .margin-content {
      padding-right: math.div($defaultPadding, 4);
      border-right: 1px solid rgba($borderColor-light, 0.5);
    }
  }
  .meta {
    font-size: $small;
    margin: 0 0 2rem;
    color: $middleGray;
    &.top {
      margin: 0 0 math.div($defaultPadding, 3);
      display: flex;
      align-items: center;
      time {
        margin-left: math.div($defaultPadding, 3);
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
    background-color: $darkerShadeBackground;
    font-size: 0.75rem;
    padding: math.div($defaultPadding, 2) math.div($defaultPadding, 2);
    border-radius: $radius-large;
    box-shadow: $boxShadow;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: $defaultPadding;
    margin-left: math.div($defaultPadding, 2) * -1;
    margin-right: math.div($defaultPadding, 2) * -1;
    color: $middleGray;
    .copy {
      margin-right: $defaultPadding;
      padding-right: $defaultPadding;
    }
    h6 {
      margin: 0;
    }
    p {
      margin: 0;
    }
    .button {
      margin: 0.5rem 0;
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
    font-size: $h4;

    &:after {
      content: '';
      margin-top: math.div($defaultPadding, 2);
      display: block;
      height: 4px;
      width: 100%;
      border-top: 2px dotted $borderColor-light;
    }
  }
  h3 {
    font-size: $h5;
  }
  h2,
  h3,
  h4 {
    & > a {
      margin-left: 0;
      opacity: 0;
      transition: $transition;
      &:before {
        content: '#';
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $primary;
        font-weight: 400;
        font-size: 1rem;
        margin-left: -1.25rem;
        padding-right: 1rem;
        position: absolute;
      }
    }
    &:hover {
      & > a {
        opacity: 1;
      }
    }
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
