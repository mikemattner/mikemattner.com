<template>
  <section class="section section--article">
    <div :key="$route.params.slug">
      <PageHero dark>
        <template v-slot:default>
          <div class="columns is-centered">
            <div class="column is-three-fifths">
              <Header tag="h1">{{ intro.title }}</Header>
              <p v-html="intro.body"></p>
            </div>
          </div>
        </template>
      </PageHero>
      <section id="content">
        <AllArticles :posts="posts" />
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
  padding-bottom: 4rem;
  .hero .columns {
    margin-bottom: 0;
  }
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
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
