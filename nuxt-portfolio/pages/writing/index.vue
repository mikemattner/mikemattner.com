<template>
  <section class="section section--article">
    <div :key="$route.params.slug">
      <PageHero dark>
        <template v-slot:default>
          <div class="columns">
            <div class="column is-full">
              <Header tag="h1" decorator>{{ intro.title }}</Header>
              <p v-html="intro.body"></p>
            </div>
          </div>
        </template>
      </PageHero>
      <Wavy flip />
      <div id="content" class="container">
        <div class="columns">
          <div class="column is-full">
            <AllArticles :posts="posts" />
            <!-- <ul class="article-list">
              <li
                v-for="article in articles"
                :key="article.title"
                class="article"
              >
                <ArticleLink :article="article" archive />
              </li>
            </ul> -->
          </div>
        </div>
      </div>
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
      intro
    }
  },
  async asyncData() {
    // create context via webpack to map over all blog posts
    const allPosts = await require.context('~/articles/', true, /\.md$/)
    const posts = allPosts.keys().map(key => {
      // give back the value of each post context
      return allPosts(key)
    })
    return {
      posts
    }
  },
  head() {
    return {
      titleTemplate: `Writing – %s`
    }
  }
}
</script>

<style lang="scss">
.section--article {
  min-height: 90vh;
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
    @media (min-width: $tablet) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 10px;
    }

    li {
      margin: 0;
      justify-self: stretch;
      align-self: stretch;
      display: flex;
      align-items: stretch;
      justify-content: flex-start;

      @media (max-width: $tablet) {
        border-bottom: 1px solid $darkBlue-6;

        &:first-child {
          border-top: 1px solid $darkBlue-6;
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
