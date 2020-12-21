<template>
  <section class="section section--single--article">
    <article :key="$route.params.slug">
      <PageHero dark>
        <template v-slot:default>
          <div class="meta top main-content">
            Posted
            <time
              ><strong>{{ formattedDate }}</strong></time
            >
          </div>
          <Header
            tag="h1"
            class="display-4 main-content"
            v-html="writing.title"
            center
          ></Header>
          <div class="meta flex main-content">
            <div v-if="writing.link" class="article-link" target="_blank">
              <ButtonLink :href="writing.link[0]" target="_blank"
                ><span v-if="writing.linktitle">{{ writing.linktitle }}</span
                ><span v-else>Visit Link</span>
                <fa-icon icon="external-link-alt" size="sm"></fa-icon
              ></ButtonLink>
            </div>
            <ul class="tags">
              <li v-for="item in writing.tag" :key="item" :value="link">
                <nuxt-link :to="`/tag/${formattedTag(item)}`">{{
                  item
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </template>
      </PageHero>
      <div id="content" :data-type="writing.type">
        <nuxt-content :document="writing" />
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
              >Back to Articles
            </Button>
            <Button
              v-if="next"
              :to="`/writing/${next.slug}`"
              class="button next"
              >Next Article <fa-icon icon="chevron-right" size="sm"></fa-icon
            ></Button>
            <Button v-else to="/writing/" class="button next"
              >Back to Articles
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
  },
  methods: {
    formattedTag(tag) {
      return tag.toLowerCase().trim()
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
  }
  .nuxt-content-highlight {
    position: relative;
    background-color: $darkShadeBackground;
    font-size: 0.75rem;
    padding: $defaultPadding;
    border-radius: $radius-small;
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
      // background-color: $bodyBackground;
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
    color: tint($darkBlue, 40%);
    &.top {
      margin: 0;
    }
    &.flex {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .article-link {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-right: $defaultPadding/2;
      .button {
        font-size: $small;
        padding: 5px 10px;
        svg {
          margin-left: 0.5rem;
        }
      }
    }
    ul {
      &.tags {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        li {
          font-size: $small;
          margin: $defaultPadding/5 $defaultPadding/5 $defaultPadding/5 0;
          a {
            display: block;
            background-image: none;
            padding: 2px 10px;
            border-radius: 10px;
            background-color: $tagColor;
            color: shade($tagColor, 80%);
            font-weight: 700;
            &:hover {
              background-image: none;
              background-color: $primary;
              color: $white;
            }
          }
        }
      }
    }
  }
  .links {
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid $borderColor-light;
    text-align: center;
    font-size: 0.75rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1.25rem;
    }

    a.button {
      align-self: stretch;
      flex-grow: 1;
      @media (max-width: 768px) {
        margin: 0.5rem 0;
      }
      @media (min-width: 768px) {
        width: 200px;
        &.prev {
          grid-column: 1;
        }
        &.next {
          grid-column: 3;
          justify-self: end;
        }
        // &.back {
        //   grid-column: 2;
        //   justify-self: center;
        // }
      }
    }
  }
  h2 {
    font-size: $h6;
  }
  h3 {
    font-size: $h6;
  }
}
</style>
