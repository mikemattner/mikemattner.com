<template>
  <section class="section section--writing">
    <div :key="$route.params.slug">
      <PageHero dark>
        <div class="main-content">
          <Header tag="h1" class="text-huge main-content" decorator>{{
            writingPage.title
          }}</Header>
          <div>
            <p>
              <span v-html="writingPage.introBody"></span>
              <span class="tags-paragraph">
                <span v-for="(tag, index) in tags" :key="index">
                  <nuxt-link :to="`/writing/tag/${formattedTag(tag.title)}`">
                    {{ tag.title }}</nuxt-link
                  ></span
                >.
              </span>
            </p>
          </div>
        </div>
      </PageHero>
      <section class="section--dark">
        <div class="layout">
          <SearchForm />
        </div>
        <AllArticles :posts="writing" :all-tags="tags" list-all list-filters />
      </section>
      <WaveRight flip />
    </div>
  </section>
</template>

<script>
import { writingPage } from '@/data/pages.yaml'
export default {
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, app, error }) {
    let writing
    let tags
    try {
      tags = await $content('tag').fetch()
      writing = await $content('writing').sortBy('date', 'desc').fetch()
    } catch (e) {
      try {
        tags = await $content('tag').fetch()
        writing = await $content('writing').sortBy('date', 'desc').fetch()
      } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
      }
    }
    return {
      tags,
      writing,
    }
  },
  data() {
    return {
      writingPage,
    }
  },
  head() {
    return {
      titleTemplate: `Writing – %s`,
    }
  },
  methods: {
    formattedTag(tag) {
      return tag.toLowerCase().trim()
    },
  },
}
</script>

<style lang="scss">
.section--writing {
  min-height: 90vh;
  padding-bottom: 4rem;
  .hero {
    // border-bottom: 1px solid $borderColor-light;
    h1 {
      margin-bottom: 0rem;
      @media (min-width: $tablet) {
        // text-indent: -0.75rem;
      }
    }
    p {
      font-size: $h6;
      margin-bottom: 3rem;
    }
  }
  .section--dark {
    background-color: $darkShadeBackground;
    padding-bottom: $defaultPadding * 2;
  }
  .search-form {
    margin-bottom: math.div($defaultPadding, 2);
    grid-column: main-content / span 6;
    @media (min-width: $tablet) {
      grid-column: main-content / span 6;
    }
  }
  .tags-paragraph {
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
