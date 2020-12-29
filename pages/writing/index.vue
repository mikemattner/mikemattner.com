<template>
  <section class="section section--article">
    <div :key="$route.params.slug">
      <PageHero>
        <template v-slot:default>
          <div class="main-content">
            <Header tag="h1" class="display-4 main-content" decorator>{{
              intro.title
            }}</Header>
            <div>
              <p>
                {{ intro.body }}
                <span class="tags">
                  <span v-for="tag in tags" :key="tag">
                    <nuxt-link :to="`/tag/${formattedTag(tag.name)}`">{{
                      tag.name
                    }}</nuxt-link> </span
                  >.
                </span>
              </p>
            </div>
          </div></template
        >
      </PageHero>
      <section id="content" class="layout">
        <AllArticles :posts="writing" />
      </section>
    </div>
  </section>
</template>

<script>
import { intro } from '@/data/archive.yaml'
export default {
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro,
    }
  },
  methods: {
    formattedTag(tag) {
      return tag.toLowerCase().trim()
    },
  },
  async asyncData({ $content, app }) {
    let writing
    let tags
    try {
      tags = await $content('tag').fetch()
      writing = await $content('writing').sortBy('date', 'desc').fetch()
    } catch (error) {
      try {
        writing = await $content('writing').sortBy('date', 'desc').fetch()
        writing = await $content('writing').sortBy('date', 'desc').fetch()
      } catch (error) {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }
    return {
      tags,
      writing,
    }
  },
  head() {
    return {
      titleTemplate: `Writing – %s`,
    }
  },
}
</script>

<style lang="scss">
.section--article {
  min-height: 90vh;
  padding-bottom: 4rem;
  .hero {
    h1 {
      margin-bottom: 0rem;
      @media (min-width: $tablet) {
        // text-indent: -0.75rem;
      }
    }
    p {
      margin-bottom: 3rem;
    }
  }
  // #content {
  //   padding-top: $defaultPadding;
  // }
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tags {
    span {
      display: inline-block;
      margin-right: 0.25em;

      &:after {
        content: ',';
      }
      &:last-child {
        margin-right: 0;
        &:before {
          content: 'and ';
        }
        &:after {
          content: '';
        }
      }
    }
  }
  .meta {
    font-size: 0.675rem;
    margin: 0;
    color: rgba($white, 0.25);
    .bull {
      margin: 0 0.25rem;
    }
    .tag {
      font-size: 0.575rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
  .links {
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba($white, 0.1);
    text-align: center;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
